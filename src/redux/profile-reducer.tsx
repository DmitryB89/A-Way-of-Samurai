import React from "react";
import {ActionTypes, PostType} from "./types";

const initialState = {

    posts: [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 10},
    ],
    newPostText: ''

}

export const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }

    return state
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