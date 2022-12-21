import React from "react";
import {ActionTypes, PostType} from "./types";

export type UserType = {
    id: number
    followed: boolean
    name: string
    uniqueUrlName: string
    status: string
    location?: LocationType
    photos: PhotosType
}

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
}
const initialState: InitialStateType = {
    users:[],
    pageSize: 5,
    totalUsersCount: 0
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state

    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)