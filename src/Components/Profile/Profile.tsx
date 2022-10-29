import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="http://www.kolymastory.ru/wp-content/uploads/2016/05/gorod_003.jpg" alt="panorama"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )

}