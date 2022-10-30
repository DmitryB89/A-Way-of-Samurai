import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Alena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Egor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>Ksenia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your progress?</div>
                <div className={s.message}>Yo</div>
            </div>

        </div>
    )
}