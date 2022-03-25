import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/SignIn';
import Signup from './containers/Signup';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route path='/signin' exact element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
