import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";

// let state = [
//     {id: 1, title: 'Title 1', subtitle: 'Subtitle 1', text: 'Hey hi one'},
//     {id: 2, title: 'Title 2', subtitle: 'Subtitle 2', text: 'Hey hi two'},
// ]

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});