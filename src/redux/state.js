import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-page";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;