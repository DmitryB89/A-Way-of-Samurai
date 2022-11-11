import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer
    // sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

