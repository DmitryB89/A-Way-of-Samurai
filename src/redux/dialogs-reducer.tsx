import React from "react";
import {ActionTypes, DialogPageType, PostType, RootStateType} from "./types";


const initialState = {

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alena'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Ksenia'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your progress?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Nice to hear ya'},
        {id: 5, message: 'Good evening'},
        {id: 6, message: 'Have a nice day'},
    ],
    newMessageBody: ''
}


export const dialogsReducer = (state= initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
    }

    return state
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const)