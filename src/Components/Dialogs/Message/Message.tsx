import React from "react";
import s from './../Dialogs.module.css'

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )

}
