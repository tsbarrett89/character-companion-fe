import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
