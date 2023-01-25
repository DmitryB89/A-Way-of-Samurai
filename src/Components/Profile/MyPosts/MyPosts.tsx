import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/types";
import {useForm, Controller} from "react-hook-form";


type MyPostsPropsType = {
    posts: PostType[]
    message: string
    onAddPost: any
    newTextChangeHandler: (text: string) => void
}


type MyPostsFormPropsType = {
    message: string
    onAddPost: any
    newTextChangeHandler: (text: string) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(post => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>()


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <MyPostsForm message={props.message} onAddPost={props.onAddPost}
                         newTextChangeHandler={props.newTextChangeHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export const MyPostsForm = (props: MyPostsFormPropsType) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);


    const onAddPost = () => {
        props.onAddPost()
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                const text = e.currentTarget.value
        props.newTextChangeHandler(text)
    }
    return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <textarea {...register("myPost", { required: false })} value={props.message} onChange={newTextChangeHandler} ></textarea>
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
        </div>
    </form>
    )
}