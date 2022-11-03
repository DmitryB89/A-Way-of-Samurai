import {ChangeEvent} from "react";

export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType

}

type SidebarType = {}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody:string

}

export type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type StoreType = {
    _state: RootStateType
    // updateNewPostText: (newText: string) => void
    // addPost: (newPostText: string) => void
    _onChange: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}


// type AddPostActionType = {
//     type: 'ADD-POST'
//     newPostText: string
// }
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof newTextChangeHandlerAC>
type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>

// type UpdateNewPostTextType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
export type ActionTypes = AddPostActionType | UpdateNewPostTextType | SendMessageType | UpdateNewMessageBodyType

export const addPostAC = (newPostText:string) => {
    return {
        type:"ADD-POST",
        newPostText:newPostText
    } as const
}

export const newTextChangeHandlerAC = (newText:string) => {
    return {
        type:"UPDATE-NEW-POST-TEXT",
        newText:newText
    } as const
}

export const sendMessageAC = () => ({type:'SEND-MESSAGE'} as const)

export const updateNewMessageBodyAC = (body:string) => ({type:'UPDATE-NEW-MESSAGE-BODY', body:body} as const)


export const store: StoreType = {
    _state: {
        dialogPage: {
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
            newMessageBody:''
        },
        profilePage: {

            posts: [
                {id: 1, message: 'How are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 10},
            ],
            newPostText: ''

        },
        sidebar: {}
    },
    _onChange(state: RootStateType) {
        console.log('state is rendered')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback

    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogPage.newMessageBody = action.body;
            this._onChange(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id:6, message:body});
            this._onChange(this._state)
        }

    }
}
