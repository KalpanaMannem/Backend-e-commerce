import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../Header';
import './style.css'
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
  return (
      <>
      <Header/>
      {
        props.sidebar ? 
        <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/category'}>Category</NavLink></li>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/orders'}>Orders</NavLink></li>
          </ul>
          
          </Col>
          <Col md={10} style={{marginLeft:"auto",paddingTop : "60px"}}>
          {props.children}
          </Col>
        </Row>
          {/* <div style={{margin:'5rem'}} className='container text-center'>
          <h1>Welcome to Admin Dashboard</h1>
          <p>Loremeifkb</p>
          </div> */}
          </Container>
          :
          props.children
      }
      
     
      
       
      </>
  )
};

export default Layout;

