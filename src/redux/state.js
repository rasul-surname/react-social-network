// let postsData = [
//     {id: 1, message: 'Hi', likesCount: 10},
//     {id: 2, message: 'Hello', likesCount: 25},
//     {id: 3, message: 'How are you?', likesCount: 35},
// ];
// let dialogsData = [
//     {id: 1, name: 'Rasul'},
//     {id: 2, name: 'Ahmed'},
// ];
// let messagesData = [
//     {id: 1, message: 'Hey'},
//     {id: 2, message: 'Hi'},
// ];

import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'Hello', likesCount: 25},
            {id: 3, message: 'How are you?', likesCount: 35},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Rasul'},
            {id: 2, name: 'Ahmed'},
        ],
        messagesData: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Hi'},
        ],
    },
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;