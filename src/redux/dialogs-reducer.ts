import React from "react";
import {ActionTypes} from "./types";

export type DialogType = {
    id: number
    name: string
    avatar?: string
}
export type MessageType = {
    id: number
    message: string
}


// export type InitialStateType = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     newMessageBody: string
// }

const initialState = {

    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://coolsen.ru/wp-content/uploads/2021/12/86-20211209_001242.jpg'
        },
        {
            id: 2,
            name: 'Alena',
            avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/1857933/pub_5f024d25382c316e9bbb9432_5f024ef7b2f9e676e27f27cd/scale_1200'
        },
        {id: 3, name: 'Andrey', avatar: 'https://wallpapercave.com/wp/wp2853898.png'},
        {
            id: 4,
            name: 'Egor',
            avatar: 'https://rumanga.ru/wp-content/uploads/2017/10/Саске-Учиха-биография-персонажа-Sasuke-Uchiha-1.jpg'
        },
        {
            id: 5,
            name: 'Valera',
            avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612569689_191-p-shikamaru-na-zelenom-fone-232.png'
        },
        {
            id: 6,
            name: 'Ksenia',
            avatar: 'https://www.animerankers.com/wp-content/uploads/2021/05/Sakura-1-2048x1530.jpg'
        },
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your progress?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Nice to hear ya'},
        {id: 5, message: 'Good evening'},
        {id: 6, message: 'Have a nice day'},
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state:InitialStateType = initialState, action: ActionTypes):InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.body
            }

        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            }
        default:
            return state


    }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const)