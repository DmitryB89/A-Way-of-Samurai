import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

// export type PostsPropsType = {
//     id:number
//     message:string
//     likesCount:number
// }


export const MyPosts = () => {
    const posts = [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 10},
    ]

    const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
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