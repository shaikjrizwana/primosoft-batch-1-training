import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";

function producstReducer(state = [], action) {
  return state;
}

function userReducer(state = "", {type,payload}) {
  switch(type){
    case 'updateUser':
      return payload;
    default:
      
  }
  return state;
}

const allReducers = combineReducers({
  products: producstReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "iphone" }],
    user: "Mahendra"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "Vijay"
  }
};

store.dispatch(updateUserAction);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
