/**
 * Created by harelg on 29/01/2018.
 */

// Our ChatApp entry point
//////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import configureStore from './store/store';
import App from "./components";
import initialState from './reducers/initialState';

import "./style/index.scss";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);