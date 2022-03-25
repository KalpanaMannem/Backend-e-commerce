

import React from 'react'
import { Route,Outlet,Navigate } from "react-router-dom";

 const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');
  return  token ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;