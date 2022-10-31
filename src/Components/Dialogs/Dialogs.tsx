import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType, MessagesPropsType} from "../../App";

type DialogsDataPropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}


export const Dialogs:React.FC<DialogsDataPropsType> = (props) => {


    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messageElements = props.messages.map(message => <Message message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}

            </div>

        </div>
    )
}