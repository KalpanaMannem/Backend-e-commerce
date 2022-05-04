import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Col, Container, Row, Table } from 'react-bootstrap'
import Input from '../../components/UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../actions/product.action';
import NewModal from '../../components/UI/Modal';
import './style.css'
import { generatePublicUrl } from '../../urlConfig';
const Products = () => {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [productPictures, setProductPictures] = useState("")
    const [show, setShow] = useState(false)
    const [productDetailModal, setproductDetailModal] = useState("")
    const [productDetails, setProductDetails] = useState(null)
    const category = useSelector(state => state.categoryReducer);
    const product = useSelector(state => state.productReducer);
    const dispatch = useDispatch()
    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("quantity", quantity);
        form.append("price", price);
        form.append("description", description);
        form.append("category", categoryId);
        for (let pic of productPictures) {
            form.append("productPicture", pic);
        }

        dispatch(addProduct(form));

        setShow(false);
    }
    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPicture = (e) => {

        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }

    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>

                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?

                            product.products.map(product =>
                                <tr onClick={() => ShowProductDetailModal(product)} key={product._id}>
                                    <td>1</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.category.name}</td>

                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }

    const renderAddProductModal = () => {
        return (

            <NewModal
                show={show}
                handleClose={handleClose}
                modalTitle={"Add New Product"}
            >
                <Input
                    label="Name"
                    value={name}
                    placeholder={`Product name`}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={`Quantity name`}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    label="Price"
                    value={price}
                    placeholder={`Price `}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    placeholder={`Description `}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    className='form-control'
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>

                        )
                    }
                </select>
                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }
                <input type="file" name="productPicture" onChange={handleProductPicture} />


            </NewModal>
        )
    }

    const handleCloseProductDetailsModal = () => {
        setproductDetailModal(false)
    }
    const ShowProductDetailModal = (product) => {
        setproductDetailModal(true)
        setProductDetails(product)
    }
    const renderShowProductDetailModal = () => {
        if (!productDetails) {
            return null;
        }
        return (
            <NewModal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={"Product Details"}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className='key'>Name</label>
                        <p className='value'>{productDetails.name}</p>

                    </Col>
                    <Col md="6">
                        <label className='key'>Price</label>
                        <p className='value'>{productDetails.price}</p>

                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className='key'>Quantity</label>
                        <p className='value'>{productDetails.quantity}</p>

                    </Col>
                    <Col md="6">
                        <label className='key'>Category</label>
                        <p className='value'>{productDetails.category.name}</p>

                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className='key'>Description</label>
                        <p className='value'>{productDetails.description}</p>

                    </Col>

                </Row>
                <Row>
                    <Col style={{ display: "flex" }}>
                        <div style={{ display: 'flex' }}>
                            <label>Product Pictures</label>
                            {
                                productDetails.productPictures.map(picture =>
                                    <div className='productImgContainer'>
                                        <img src={generatePublicUrl(picture.img)} />

                                    </div>

                                )}
                        </div>
                    </Col>
                </Row>

            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3>Products</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            renderProducts()
                        }
                    </Col>
                </Row>

            </Container>
            {
                renderAddProductModal()

            }
            {
                renderShowProductDetailModal()
            }
        </Layout>
    )

}

export default Products;