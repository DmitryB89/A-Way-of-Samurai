import React from "react";
import {addPostAC, InitialStateType, newTextChangeHandlerAC} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        newTextChangeHandler: (text: string) => {
            const action = newTextChangeHandlerAC(text)
            dispatch(action)
        },
        onAddPost: (newPostText: string) => {
            const action = addPostAC(newPostText)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)