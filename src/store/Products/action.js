import actionType from './actionTypes';
import {productService} from '../../service/productService'


export const productActions = {
  product,
};

function product(product) {
  return (dispatch) => {
    dispatch({type: actionType.PRODUCT_REQUEST,product});


    productService.addProduct(product).then(
      (product) => {
        dispatch({type: actionType.PRODUCT_SUCCESS,product});
        console.log("It would've pushed");
      },
      (error) => {
        console.log(error);
        dispatch({type: actionType.PRODUCT_FAILURE,error});
      }
    );
  };
 }