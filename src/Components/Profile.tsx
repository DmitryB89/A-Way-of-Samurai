import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="http://www.kolymastory.ru/wp-content/uploads/2016/05/gorod_003.jpg" alt="panorama"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )

}