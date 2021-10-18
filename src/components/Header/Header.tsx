import React from 'react';
import classes from "./Header.module.css";
import logo from "../../img/logoVk.png"

export const Header = () => {
    return (
        <header className={classes.mainHeader}>
            <img className={classes.logo}
                 src={logo}/>
        </header>
    )
}