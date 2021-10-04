let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';


let store = {
    _state: {
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
            newMessageText: '',
        },
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('Hey')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_CHANGE) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_CHANGE) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_CHANGE, newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_CHANGE, newText: text})

export default store;