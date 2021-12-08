import React from 'react';
import classes from "./Header.module.css";
import logo from "../../img/logoVk.png"
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: any,
    isAuth: boolean
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.mainHeader}>
            <img className={classes.logo}
                 src={logo}/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth ?
                        <NavLink to="/profile">
                            <p className={classes.loginName}>{props.login}</p>
                        </NavLink>
                        :
                        <NavLink activeClassName={classes.activeLogin}
                                 className={classes.loginButton} to="/login">Login
                        </NavLink>
                }
            </div>
        </header>
    )
}