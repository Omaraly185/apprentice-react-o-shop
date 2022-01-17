import actionTypes from './actionType';

const initialState = { addProduct: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REQUEST:
      return { addProduct: true };
    case actionTypes.PRODUCT_SUCCESS:
      return {};
    case actionTypes.PRODUCT_FAILURE:
      return {};
    default:
      return state;
  }
};