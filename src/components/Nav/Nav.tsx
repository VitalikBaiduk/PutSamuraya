import React from 'react';
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.elemNav}>
                <img className={classes.logo} src="https://img.icons8.com/wired/64/000000/human-head.png"/>
                <NavLink activeClassName={classes.activeLink} to="/profile">My profile</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo} src="https://img.icons8.com/dotty/80/000000/news.png"/>
                <NavLink activeClassName={classes.activeLink} to="/news">News</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo} src="https://img.icons8.com/ios/50/000000/imessage.png"/>
                <NavLink activeClassName={classes.activeLink} to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo} src="https://img.icons8.com/ios/50/000000/friends.png"/>
                <NavLink activeClassName={classes.activeLink} to="/friends">Friends</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo}
                     src="https://img.icons8.com/wired/64/000000/community-grants.png"/>
                <NavLink activeClassName={classes.activeLink} to="/community">Сommunity</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo}
                     src="https://img.icons8.com/ios/50/000000/photo-editor.png"/>
                <NavLink activeClassName={classes.activeLink} to="/photo">Photo</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo}
                     src="https://img.icons8.com/ios/50/000000/apple-music.png"/>
                <NavLink activeClassName={classes.activeLink} to="/music">Music</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo}
                     src="https://img.icons8.com/ios/50/000000/epic-games.png"/>
                <NavLink activeClassName={classes.activeLink} to="/games">Games</NavLink>
            </div>
            <div className={classes.elemNav}>
                <img className={classes.logo} src="https://img.icons8.com/ios/50/000000/settings--v1.png"/>
                <NavLink activeClassName={classes.activeLink} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}