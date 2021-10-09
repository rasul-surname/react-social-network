import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onSendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let changeNewMessageText = (text) => {
                    store.dispatch(updateNewMessageTextChangeActionCreator(text))
                }

                return <Dialogs
                    updateNewMessageBody={changeNewMessageText}
                    sendMessage={onSendMessage}
                    state={state.dialogsPage}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
