import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
    // sidebar: SidebarType

}
// export type SidebarType = {}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string

}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
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
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
    // dialogsPage: DialogPageType
    // profilePage: ProfilePageType
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