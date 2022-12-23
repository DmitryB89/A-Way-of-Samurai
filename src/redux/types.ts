import {addPostAC, newTextChangeHandlerAC, ProfileType, setUserProfile} from "./profile-reducer";
import {DialogType, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";

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

export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile:ProfileType
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
type Follow = ReturnType<typeof follow>
type Unfollow = ReturnType<typeof unfollow>
type SetUsers = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type setTotalUsersCount = ReturnType<typeof setTotalUsersCount>
type toggleIsFetching = ReturnType<typeof toggleIsFetching>
type setUserProfile = ReturnType<typeof setUserProfile>

// type UpdateNewPostTextType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
export type ActionTypes =
    AddPostActionType
    | UpdateNewPostTextType
    | SendMessageType
    | UpdateNewMessageBodyType
    | Follow
    | Unfollow
    | SetUsers
    | SetCurrentPage
    | setTotalUsersCount
    | toggleIsFetching
    | setUserProfile