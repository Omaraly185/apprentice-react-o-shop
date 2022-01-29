import handleResponse from "./handleResponse";

export const productService ={
    addProduct,
    getProduct,
    editProduct
};

function addProduct(product) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    };
    return fetch('/products/add', requestOptions).then(
        handleResponse
    );
}

function editProduct(product, productPosition) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({product: product, productPosition}) ,
    };
    return fetch('/products/edit', requestOptions).then(
        handleResponse
    );
}

function getProduct() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
    return fetch('/product', requestOptions).then(
        handleResponse
    )
}