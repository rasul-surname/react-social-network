import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);