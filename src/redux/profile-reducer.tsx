import React from "react";
import {ActionTypes, PostType} from "./types";


export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState: InitialStateType = {

    posts: [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 10},
    ],
    newPostText: ''

}

export const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state, newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}

export const newTextChangeHandlerAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
