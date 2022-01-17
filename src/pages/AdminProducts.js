import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

function AdminProducts() {

  return(
    <div>
      <Header/>;
      <h1>AdminProducts Works!</h1>
      <Link to="/new-products" className="btn btn-primary">
            New Product
          </Link>
    </div>
  ); 
}

export default AdminProducts;
