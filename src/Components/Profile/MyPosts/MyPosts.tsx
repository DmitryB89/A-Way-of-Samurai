import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'How are you?'}/>
                <Post message={'It is my first post'}/>
            </div>
        </div>
    )

}