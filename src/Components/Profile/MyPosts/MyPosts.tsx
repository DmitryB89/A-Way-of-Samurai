import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPostCallback: (m: string) => void

}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(post => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // const text = newPostElement.current?.value
        // props.addPostCallback(newPostElement.current ? newPostElement.current.value : '')
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}