import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePageDataType = {
    profilePageData:ProfilePageType
    addPostCallback:(m:string)=>void
}


export const Profile:React.FC<ProfilePageDataType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts} addPostCallback={props.addPostCallback}/>
        </div>
    )

}