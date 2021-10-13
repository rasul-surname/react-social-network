let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Rasul'},
        {id: 2, name: 'Ahmed'},
    ],
    messagesData: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hi'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: text}],
                newMessageText: '',
            }
        case UPDATE_NEW_MESSAGE_CHANGE:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_CHANGE, newText: text})

export default dialogsReducer;