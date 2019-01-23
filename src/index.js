import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";

export const showModal = modal => ({ type: "SHOW_MODAL", modal });
export const hideModal = () => ({ type: "HIDE_MODAL"});

const reducer = (state, action) => {
    switch(action.type) {
        case "SHOW_MODAL":
            return {...state, modal: action.modal};
        case "HIDE_MODAL":
            return {...state, modal: null};
        default: 
            return state;
    }
}

const store = createStore(reducer, {modal: null}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
