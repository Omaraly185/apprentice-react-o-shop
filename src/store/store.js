import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from './login/reducer';
import registerReducer from './register/reducer';
import thunkMiddleware from 'redux-thunk';
import productReducer from './Products/reducer'

const store = createStore(
  combineReducers({
    login: loginReducer,
    register: registerReducer,
    product: productReducer
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;