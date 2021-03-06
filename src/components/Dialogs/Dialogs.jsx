import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextChangeActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let sendMessage = () => {
        props.sendMessage()
    }

    let changeNewMessageText = (event) => {
        let text = event.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogsData.map(data => {
                    return <DialogItem name={data.name} key={data.id} id={data.id} />
                })}
            </div>
            <div className={classes.messages}>
                <div>
                    {props.state.messagesData.map(data => {
                        return <Message message={data.message} key={data.id} id={data.id} />
                    })}
                </div>
                    <div>
                        <textarea onChange={changeNewMessageText} value={props.state.newMessageText}  />
                    </div>
                    <div>
                        <button onClick={sendMessage}>
                            Send
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Dialogs;
