import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../redux/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePageDataType = {
    store:StoreType
}


export const Profile: React.FC<ProfilePageDataType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )

}