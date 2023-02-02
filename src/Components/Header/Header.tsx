import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

// type HeaderPropsType = {
//     logout:() => void
//     isAuth:boolean
//     login:(email: string, password: string, rememberMe: boolean) => void
// }


export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img
                src="https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/e/2/1/5/6e6e-3195-4357-a11c-ae11da864c3a"
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} – <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

