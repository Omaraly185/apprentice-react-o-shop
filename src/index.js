import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { history } from './utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store'

// configureFakeBackend ();
ReactDom.render(
  <BrowserRouter navigator={history}>
  <App />
</BrowserRouter>,
// </Provider>,

  document.getElementById('root')
);

reportWebVitals()