import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from './login/reducers';
import { thunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =createStore(
    combineReducers(
        {
            login: loginReducer,
            Register: registerReducer
        
        },
    composeWithDevTools()
    ),
    composeWithDevTools(applyMiddleware(thunkMiddleware))

);
export default store;
