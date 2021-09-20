import React from 'react';
import classes from "./Header.module.css";

export const Header = () => {
    return (
        <header className={classes.mainHeader}>
            <img className={classes.logo}
                 src="https://freepikpsd.com/media/2019/10/vk-logo-png-7-Transparent-Images.png"/>
        </header>
    )
}