import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let onSendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//
//                 let changeNewMessageText = (text) => {
//                     store.dispatch(updateNewMessageTextChangeActionCreator(text))
//                 }
//
//                 return <Dialogs
//                     updateNewMessageBody={changeNewMessageText}
//                     sendMessage={onSendMessage}
//                     state={state.dialogsPage}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
     return {
        state: state.dialogsPage
     }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(updateNewMessageTextChangeActionCreator())
        },
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
