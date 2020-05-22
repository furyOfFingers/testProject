import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Store/Store';
import Layout from './Components/Layout/Layout';

const app = (
  <Provider store={store}>
    <Layout text='hello there' />
    {/* <App /> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById('index'));
