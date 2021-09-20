import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsItemType = {
    name: string
    path: string
    img: string
}


export const DialogsItem = (props: DialogsItemType) => {
    return (
        <div>
            <div className={classes.dialogsHuman}>
                <img className={classes.imgDialogsHuman} src={props.img} alt="img"/>
                <NavLink to={props.path}
                         className={classes.dialogsHumanText + ' ' + classes.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}
