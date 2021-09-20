import classes from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string
}

export const MessageOfDialog = (props: MessageType) => {
    return (
        <div className={classes.message}>
            <p className={classes.textMessage}>{props.message}</p>
        </div>
    )
}