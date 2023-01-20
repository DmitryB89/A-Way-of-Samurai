import {ActionTypes} from "./types";

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
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {userId, email, login}
    } as const
}