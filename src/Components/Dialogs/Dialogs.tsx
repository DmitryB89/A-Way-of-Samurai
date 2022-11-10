import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionTypes, DialogPageType, StoreType} from "../../redux/types";

type DialogsPageDataType = {
    dialogsPage: DialogPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void


}

export const Dialogs: React.FC<DialogsPageDataType> = (props) => {
    const state = props.dialogsPage


    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                    id={dialog.id}/>)
    const messageElements = props.dialogsPage.messages.map(message => <Message key={message.id}
                                                                   message={message.message}/>)
    const newMessageBody = props.dialogsPage.newMessageBody

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.onNewMessageChange(body)
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
                <textarea value={newMessageBody} onChange={onNewMessageChange} ref={newMessage}
                          placeholder={'Enter your message'}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send Message</button>
            </div>

        </div>
    )
}