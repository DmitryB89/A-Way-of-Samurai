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
    message:string
}

export const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Alena'} id={2}/>
                <DialogItem name={'Andrey'} id={3}/>
                <DialogItem name={'Egor'} id={4}/>
                <DialogItem name={'Valera'} id={5}/>
                <DialogItem name={'Ksenia'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your progress?'}/>
                <Message message={'Yo'}/>

            </div>

        </div>
    )
}