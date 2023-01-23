import React from "react";
import s from './ProfileInfo.module.css'
import {log} from "util";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfilePropsType = {
    profile: ProfileType | null
}
export const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    console.log(props)

    if (!props.profile) {
        console.log('Нет фото')
    }
    return (
        <div>
            <div>
                <img src="http://www.kolymastory.ru/wp-content/uploads/2016/05/gorod_003.jpg" alt="panorama"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large}/>
                {/*<ProfileStatus status={'Синьер-хуер'}/>*/}
            </div>
        </div>
    )

}