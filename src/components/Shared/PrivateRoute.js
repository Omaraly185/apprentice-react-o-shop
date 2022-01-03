import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Header /> && <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
