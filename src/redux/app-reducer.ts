import {ActionTypes} from "./types";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {Profile} from "../Components/Profile/Profile";

type InitialStateType = {
    isInitialized: boolean
}
const initialState = {
    isInitialized: false

}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

export const initializeApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then (() => {
            dispatch(initializedSuccess())
        })

}

