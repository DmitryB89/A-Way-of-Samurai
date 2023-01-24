import React from "react";
import {ActionTypes, PostType} from "./types";
import {UserType} from "./users-reducer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status:string

}

export type ProfileType = {
    aboutMe: string
    contacts: { facebook: string; website: null | string; vk: string; twitter: string; instagram: string }
    fullName: string;
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string; large: string }
    userId: number;
}

const initialState: InitialStateType = {

    posts: [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 10},
    ],
    newPostText: '',
    profile: null,
    status:''

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

        case 'SET_STATUS': {
            return {
                ...state, status: action.status
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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        status: status
    } as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        }
    )
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId).then(response => {

            dispatch(setStatusAC(response.data))
        }
    )
}


export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatusAC(response. data))
        }}
    )
}


