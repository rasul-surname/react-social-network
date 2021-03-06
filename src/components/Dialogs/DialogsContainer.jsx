import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
     return {
        state: state.dialogsPage
     }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextChangeActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;








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