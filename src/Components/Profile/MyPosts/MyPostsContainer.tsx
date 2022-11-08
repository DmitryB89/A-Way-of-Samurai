import React from "react";
import {addPostAC, newTextChangeHandlerAC} from "../../../redux/profile-reducer"
import {ActionTypes, PostType, StoreType} from "../../../redux/types";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const newTextChangeHandler = (text: string) => {
        const action = newTextChangeHandlerAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts newTextChangeHandler={newTextChangeHandler} onAddPost={addPost} posts={state.profilePage.posts}
                 message={state.profilePage.newPostText}/>
    )

}