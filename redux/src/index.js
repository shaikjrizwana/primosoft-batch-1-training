import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';

function ProductReducer(state = [], action){
  return ['hii'];
}

function userReducer(state = '', {type, payload}){
  switch(type){
    case 'updateuser':
      return payload;
  }
  return state;
}
const allReducers = combineReducers({
  products: ProductReducer,
  user: userReducer
});

const store = createStore(allReducers, {
  products: [{name: 'iphone'}],
  user: 'Divya'
},
window.devToolsExtension && window.devToolsExtension()
);

const updateUserAction = {
  type : 'updateuser',
  payload: {
    user: 'john'
  }
}
console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState : 'New State'
  }
};

store.dispatch(action);
store.dispatch(updateUserAction);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
