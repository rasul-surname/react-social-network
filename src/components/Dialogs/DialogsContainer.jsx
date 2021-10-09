import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    console.log(props.store);
    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let changeNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextChangeActionCreator(text))
    }

    return (
        <Dialogs
            updateNewMessageBody={changeNewMessageText}
            sendMessage={onSendMessage}
            state={state.dialogsPage}
        />
    )
}

export default DialogsContainer;
