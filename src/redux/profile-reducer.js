let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 25},
        {id: 3, message: 'How are you?', likesCount: 35},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_CHANGE:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_CHANGE, newText: text})

export default profileReducer;