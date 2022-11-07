import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer"
import {ActionTypes, DialogPageType} from "../../redux/types";
type DialogsPageDataType = {
    dialogsPageData: DialogPageType
    dispatch: (action: ActionTypes) => void

}

export const Dialogs: React.FC<DialogsPageDataType> = (props) => {


    const dialogsElements = props.dialogsPageData.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                    id={dialog.id}/>)
    const messageElements = props.dialogsPageData.messages.map(message => <Message key={message.id}
                                                                                   message={message.message}/>)
    const newMessageBody = props.dialogsPageData.newMessageBody

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
       props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
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
                <textarea value={newMessageBody} onChange={onNewMessageChange} ref={newMessage} placeholder={'Enter your message'}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send Message</button>
            </div>

        </div>
    )
}