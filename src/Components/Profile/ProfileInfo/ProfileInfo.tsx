import React from "react";
import s from './ProfileInfo.module.css'
type ProfilePropsType = {
    profile:any
}
export const ProfileInfo:React.FC<ProfilePropsType> = (props) => {

    if (!props.profile) {
        console.log('Нет фото')
    }
    return (
        <div>
            <div>
                <img src="http://www.kolymastory.ru/wp-content/uploads/2016/05/gorod_003.jpg" alt="panorama"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )

}