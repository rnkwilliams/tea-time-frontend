import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { combineReducers } from "redux";

import thunk from 'redux-thunk'
import App from './App';
import categoryReducer from './reducers/categoryReducer'
import teaReducer from './reducers/teaReducer'
import './assets/css/bootstrap.min.css'

const rootReducer = combineReducers({
  categories: categoryReducer,
  teas: teaReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

