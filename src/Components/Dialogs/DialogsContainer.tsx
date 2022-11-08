import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer"
import {ActionTypes, DialogPageType, StoreType} from "../../redux/types";
import {Dialogs} from "./Dialogs";
type DialogsPageDataType = {
    store:StoreType

}

export const DialogsContainer: React.FC<DialogsPageDataType> = (props) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
       props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs onNewMessageChange={onNewMessageChange} sendMessageAC={onSendMessageClick} dialogsPageData={state}/>
    )
}