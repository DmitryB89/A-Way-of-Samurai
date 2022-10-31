import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../App";

type PostsDataPropsType = {
    posts: PostsPropsType[]

}


export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )

}