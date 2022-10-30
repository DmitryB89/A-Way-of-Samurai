import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://www.kolymastory.ru/wp-content/uploads/2016/05/gorod_003.jpg" alt="panorama"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )

}