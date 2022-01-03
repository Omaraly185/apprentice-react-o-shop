import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { history } from './utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <BrowserRouter navigator={history}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
