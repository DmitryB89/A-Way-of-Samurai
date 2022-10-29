import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://krasivosti.pro/uploads/posts/2021-04/1617927302_46-p-kotik-za-kompyuterom-54.jpg"
                 alt="ava"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )

}