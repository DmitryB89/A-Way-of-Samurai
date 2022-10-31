import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../App";

type PostsDataPropsType = {
    posts: PostsPropsType[]
}


export const MyPosts:React.FC<PostsDataPropsType> = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
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
                {postsElements}
            </div>
        </div>
    )

}