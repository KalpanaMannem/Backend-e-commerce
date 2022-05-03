import React, {  useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input';
import {  login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'


const Signin = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // const[error,setError]=useState("")
    const auth=useSelector(state=>state.loginReducer);
    
    const dispatch=useDispatch();
    
  

    const fnSignIn=(e)=>{
        e.preventDefault()
        const users={
            email,
            password
        }
        
        dispatch(login(users))
    }
    
    if(auth.authenticate){
        return <Navigate to={'/'}/>
    }
    return (
        <Layout>
            <Container>
                <Row className='mt-5'>
                   <Col md={{ span: 6, offset: 3 }}>
                   <Form onSubmit={fnSignIn}>
                   <Input
                         label="Email"
                         type="email"
                        placeholder="Email here"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                     />

                    <Input
                         label="Password"
                         type="password"
                         placeholder="Type password here"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
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

export default Signin;
