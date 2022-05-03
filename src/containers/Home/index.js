import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import './Home.css'

const Home = (props) => {

  const fnGetLocation = () => {
    window.navigator.geolocation.getCurrentPosition(console.log)
  }
  return (
    <Layout sidebar>
      <button onClick={fnGetLocation}>Allow location</button>
    </Layout>
  )
};

export default Home;
