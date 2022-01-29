import actionType from './actionTypes';
import {productService} from '../../service/productService'


export const productActions = {
  product,
  getProducts,
  editProduct
};

function product(product) {
  return (dispatch) => {
    dispatch({type: actionType.ADD_PRODUCT_REQUEST,product});


    productService.addProduct(product).then(
      (product) => {
        dispatch({type: actionType.ADD_PRODUCT_SUCCESS,product});
      },
      (error) => {
        console.log(error);
        dispatch({type: actionType.ADD_PRODUCT_FAILURE,error});
      }
    );
  };
 }

 function getProducts() {
  return (dispatch) => {
    dispatch({
      type: actionType.GET_PRODUCTS_REQUEST,
    });

    productService
      .getProducts()
      .then(
        (products) => {
          dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, products });
        },
        (error) => {
          dispatch({ type: actionType.GET_PRODUCTS_FAILURE, error });
        }
      )
  };
}

function editProduct(product,productPosition) {
  return (dispatch) => {
    console.log(productPosition, product);
    dispatch({type: actionType.EDIT_PRODUCT_REQUEST,product,productPosition});


    productService.editProduct(product, productPosition).then(
      (product) => {
        console.log(product);
        dispatch({type: actionType.EDIT_PRODUCT_SUCCESS,product,productPosition});
      },
      (error) => {
        console.log(error);
        dispatch({type: actionType.EDIT_PRODUCT_FAILURE,error});
      }
    );
  };
 }
export default productActions;