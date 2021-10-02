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

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'Hello', likesCount: 25},
            {id: 3, message: 'How are you?', likesCount: 35},
        ],
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

export default state;