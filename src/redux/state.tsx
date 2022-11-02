

export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType

}

type SidebarType = {}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
    _onChange: (state: RootStateType) => void
    _subscribe: (callback: (state: RootStateType)=>void) => void
    getState:() => RootStateType
}


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
            ]
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
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._onChange(this._state)
    },
    addPost(newPostText){
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange(this._state)
    },
    _onChange(state: RootStateType){
        console.log('state is rendered')
    },
   _subscribe(callback){
        this._onChange = callback

    },
    getState() {
        return this._state
    }

}
