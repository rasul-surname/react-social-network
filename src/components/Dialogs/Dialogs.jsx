import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogsData.map(data => {
                    return <DialogItem name={data.name} id={data.id} />
                })}
            </div>
            <div className={classes.messages}>
                {props.state.messagesData.map(data => {
                    return <Message message={data.message} id={data.id} />
                })}
            </div>
        </div>
    )
}

export default Dialogs;
