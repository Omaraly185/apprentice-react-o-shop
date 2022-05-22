
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {productActions} from '../store/Products/action'

function NewProducts() {
    const [product, setProduct] = useState({
      title: '',
      price: '',
      category: '',
      ImageURL: '',
    });
const [save, setSave] = useState(false);
const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((product) => ({ ...product, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSave(true);
    if (product.title && product.price && product.category && product.ImageURL) {
      dispatch(productActions.product(product));
    }
  }
  

  return(
    <div>
      <Header/>
    <div className="col-lg-4 offset-lg-4">
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="1">Title</label>
          <input
            id="1"
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
            className={
              'form-control' +
              (save && !product.title ? ' is-invalid' : '')
            }
          />
          <br></br>
          
          {save && !product.title && (
            <div className="invalid-feedback">required</div>
          )}
        </div>
        <div className="form-group">
        <label htmlFor="2">Price</label>
        <div>
            <span className="input-group-text">$</span>
        </div>
          <input
            id="2"
            type="text"
            name="price"
            placeholder="0.00"
            value={product.price}
            onChange={handleChange}
            className={
              'form-control' +
              (save && !product.price ? ' is-invalid' : '')
            }
          />
          <br></br>
          {save && product.price === isNaN && (
            <div className="invalid-feedback">required</div>
          )}
        </div>
        <div className="form-group">
        <label htmlFor="category">Category</label>
          <input
            list='category'
            type="text"
            name= "category"
            placeholder="category"
            value={product.category}
            onChange={handleChange}
            className={
              'form-control' +
              (save && !product.category ? ' is-invalid' : '')
            }
        
            
          />
          <datalist id="category">
              <option value="Bread" id="bread"/>
              <option value= "Vegetables" id= "vegetables"/>
              <option value= "Fruits" id="fruits"/>
          </datalist>
          <br></br>
          {save && !product.category && (
            <div className="invalid-feedback">required</div>
          )}
        </div>
        <div className="form-group">
        <label htmlFor="4">ImageURL</label> 
          <input
            id="4"
            type="text"
            name="ImageURL"
            placeholder="ImageURL"
            value={product.ImageURL}
            onChange={handleChange}
            className={
              'form-control' +
              (save && !product.ImageURL ? ' is-invalid' : '')
            }
          />
          <br></br>
          {save && !product.ImageURL && (
            <div className="invalid-feedback">required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
    </div>
  ); 
}

export default NewProducts;
