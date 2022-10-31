import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}

type DialogItemPropsType = {
    name: string
    id: number
}


export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alena'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Ksenia'},
    ]

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your progress?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Nice to hear ya'},
        {id: 5, message: 'Good evening'},
        {id: 6, message: 'Have a nice day'},
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messageElements = messages.map(message => <Message message={message.message}/>)


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