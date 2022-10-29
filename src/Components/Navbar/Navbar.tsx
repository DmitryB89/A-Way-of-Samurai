import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="src/Components/Navbar/Navbar">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="src/Components/Navbar/Navbar">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/Components/Navbar/Navbar">News</a>
            </div>
            <div className={s.item}>
                <a href="src/Components/Navbar/Navbar">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/Components/Navbar/Navbar">Settings</a>
            </div>
        </nav>
    )

}