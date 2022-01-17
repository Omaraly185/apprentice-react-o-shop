import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from './login/reducer';
import registerReducer from './register/reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(

  combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),
  applyMiddleware(thunkMiddleware)
  (console.log(store.getState())),
);
export default store;