import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../redux/state";

type ProfilePageDataType = {
    profilePageData: ProfilePageType
    dispatch: (action: ActionTypes) => void
}


export const Profile: React.FC<ProfilePageDataType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts} message={props.profilePageData.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )

}