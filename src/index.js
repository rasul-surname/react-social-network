import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// let rerenderEntireTree = (state) => {
//
// }
// appState={state} dispatch={store.dispatch.bind(store)} store={store}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });