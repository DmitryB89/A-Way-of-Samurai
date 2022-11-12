import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";



export const DialogItem:React.FC<DialogType> = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


