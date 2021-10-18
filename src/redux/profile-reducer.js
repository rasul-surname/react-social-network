let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 25},
        {id: 3, message: 'How are you?', likesCount: 35},
    ],
    newPostText: '',
    profile: null,
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_CHANGE, newText: text})

export default profileReducer;