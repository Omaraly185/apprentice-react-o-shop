import actions from './actionTypes';

let products = JSON.parse(localStorage.getItem('products'));
const initialState = {
  loading: true,
  products: products,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_REQUEST:
      return {
        loading: true,
        product: action.product,
      };
    case actions.ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.product,
      };
      case actions.EDIT_PRODUCT_REQUEST:
      return {
        loading: true,
        product: action.product,
        productPosition: action.productPosition
      };
    case actions.EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.product,
        productPosition: action.productPosition
      };
    case actions.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.products,
      };
    case actions.ADD_PRODUCT_FAILURE:
      return {};
    case actions.ADD_PRODUCT_FAILURE:
      return {};
    case actions.GET_PRODUCTS_FAILURE:
      return {};
    default:
      return state;
  }
};