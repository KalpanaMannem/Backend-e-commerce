import React,{  useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../../actions';

const Signup = (props) => {

    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")

    const auth=useSelector(state=>state.loginReducer);
    const user=useSelector(state=>state.userReducer);
    
    const dispatch=useDispatch();

    const userSignup=(e)=>{
        e.preventDefault();
        const users={
            firstName,lastName,email,password
        }
        dispatch(signup(users))
    }

    if(auth.authenticate){
        return <Navigate to={'/'}/>
    }

    if(user.loading){
        return <p>Loading....!</p>
    }

    return (
    <Layout>
         <Container>
             {user.message}
            <Row className='mt-5'>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={userSignup}>
                        <Row>
                             <Col md={6}>
                                <Input
                                    label="First Name"
                                    type="text"
                                    placeholder="First Name here"
                                    value={firstName}
                                    onChange={(e)=>{setFirstName(e.target.value)}}
                                 />
                                </Col>
                            <Col md={6}>
                                <Input
                                    label="Last Name"
                                    type="text"
                                     placeholder="Last Name here"
                                     value={lastName}
                                     onChange={(e)=>{setLastName(e.target.value)}}
                                    />
                             </Col>
                    </Row>
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
                         onChange={(e)=>{setPassword(e.target.value)}}
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
