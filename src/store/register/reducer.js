import actionTypes from './actionType';

const initialState = { registering: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return { registering: true };
    case actionTypes.REGISTER_SUCCESS:
      return {};
    case actionTypes.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
