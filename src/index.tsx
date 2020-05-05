import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

// const store = createStore(rootReducer, InitialState);

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // </Provider>
  ,
  document.getElementById('index')
);
