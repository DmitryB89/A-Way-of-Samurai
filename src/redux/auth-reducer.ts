import {ActionTypes} from "./types";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

type InitialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

// export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch (setAuthUserData(id, email, login, true))
                }
            }
        )
}

export const login = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch (getAuthUserData())
                }
            }
        )
}

export const logout = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch (setAuthUserData(null, null, null, false))
                }
            }
        )
}