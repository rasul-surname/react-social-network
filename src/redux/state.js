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

let rerenderStateEntireTree = () => {
    console.log('Hey')
}

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

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderStateEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderStateEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderStateEntireTree = observer;
}

export default state;