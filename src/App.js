import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/Shared/PrivateRoute';
import AdminProducts from './pages/AdminProducts';
import NewProducts from './pages/NewProducts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/shopping-cart" element={<ShoppingCart />} />
          <Route exact path="/admin-products" element={<AdminProducts />} />
          <Route exact path="/new-products" element={<NewProducts/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
