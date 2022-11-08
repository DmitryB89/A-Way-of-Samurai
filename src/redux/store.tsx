import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {RootStateType, StoreType} from "./types";


export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Alena'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Egor'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Ksenia'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your progress?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Nice to hear ya'},
                {id: 5, message: 'Good evening'},
                {id: 6, message: 'Have a nice day'},
            ],
            newMessageBody: ''
        },
        profilePage: {

            posts: [
                {id: 1, message: 'How are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 10},
            ],
            newPostText: ''

        },
        // sidebar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log('state is rendered')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback

    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)


    }
}
