import React from "react";
import {ActionTypes, PostType} from "./types";
import {UserType} from "./users-reducer";

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null

}

export type ProfileType = {
    aboutMe: string
    contacts: { facebook: string; website: null | string; vk: string; twitter: string; instagram: string }
    fullName: string;
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {small: string; large: string}
    userId: number;
}

const initialState: InitialStateType = {

    posts: [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 10},
    ],
    newPostText: '',
    profile: null

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
        case 'SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
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

export const setUserProfile = (profile:ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile} as const
}