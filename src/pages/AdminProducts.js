import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import ProductForm from '../components/ProductForm/ProductForm';


const AdminProducts = props => {
  return(
    <div>
      <Header/>
      <ProductForm/>

      <Link to="/new-products" className="btn btn-primary">
            New Product
          </Link>
    </div>
  ); 
};

export default AdminProducts;