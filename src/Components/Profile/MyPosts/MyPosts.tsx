import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/types";


type MyPostsPropsType = {
    posts: PostType[]
    message: string
    onAddPost: any
    newTextChangeHandler: (text: string) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(post => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.onAddPost()
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.newTextChangeHandler(text)


    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}