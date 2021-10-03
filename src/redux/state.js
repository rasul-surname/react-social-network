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
        },
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('Hey')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;