import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";

type DialogsPageDataType = {
    dialogsPageData:DialogPageType
}

export const Dialogs:React.FC<DialogsPageDataType> = (props) => {


    const dialogsElements = props.dialogsPageData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messageElements = props.dialogsPageData.messages.map(message => <Message message={message.message}/>)

    const newMessage=React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        const text = newMessage.current?.value
        alert (text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>

        </div>
    )
}