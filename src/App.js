import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { getAllCategory } from './actions';
import { isUserLoggedIn } from './actions/auth.actions';
import { getInitialData } from './actions/initialData.action';
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Layout from './components/Layout';
import { Category } from './containers/Category';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Products from './containers/products';
import Signin from './containers/SignIn';
import Signup from './containers/Signup';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.loginReducer);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());

    }
    dispatch(getInitialData())



  }, []);

  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/orders' element={<Orders />} />
          <Route exact path='/category' element={<Category />} />
        </Route>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
