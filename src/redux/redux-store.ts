import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import {appReducer} from "./app-reducer";
// @ts-ignore

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth:authReducer,
    app:appReducer
    // sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))

