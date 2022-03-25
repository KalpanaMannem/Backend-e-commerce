import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input';

const Signup = () => {
    return (
    <Layout>
         <Container>
            <Row className='mt-5'>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Row>
                             <Col md={6}>
                                <Input
                                    label="First Name"
                                    type="text"
                                    placeholder="First Name here"
                                    value=""
                                    onChange={()=>{}}
                                 />
                                </Col>
                            <Col md={6}>
                                <Input
                                    label="Last Name"
                                    type="text"
                                     placeholder="Last Name here"
                                     value=""
                                     onChange={()=>{}}
                                    />
                             </Col>
                    </Row>
                    <Input
                         label="Email"
                         type="email"
                        placeholder="Email here"
                        value=""
                        onChange={()=>{}}
                     />
                     <Input
                         label="Password"
                         type="password"
                         placeholder="Type password here"
                         value=""
                         onChange={()=>{}}
                    />
                     <Button variant="primary" type="submit">
                                Submit
                     </Button>
                 </Form>
             </Col>
         </Row>
     </Container>
 </Layout>
    )
};

export default Signup;
