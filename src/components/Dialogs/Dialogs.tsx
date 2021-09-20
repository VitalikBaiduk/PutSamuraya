import React from 'react';
import classes from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {MessageOfDialog} from "./MessangeOfDialogs/MessageOfDialog";
import {ArrMessageType, ArrOfPeopleType} from "../../redux/state";

type DialogsPropsType = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsPeople = props.arrOfPeople.map((elem) => {
        let path = "/dialogs/" + elem.id
        return (
            <DialogsItem path={path} name={elem.name} img={elem.img}/>
        )
    })

    let dialogsMessage = props.arrMessage.map((elem) => {
        return (
            <MessageOfDialog message={elem.message}/>
        )
    })

    const newMessage = React.createRef<HTMLInputElement>()

    const addMessage = () => {
        if (newMessage.current) {
            let text = newMessage.current.value
            alert(text)
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsPeoples}>
                {dialogsPeople}
            </div>
            <div className={classes.messagePeople}>
                {dialogsMessage}
                <input placeholder="Enter your message" ref={newMessage} className={classes.inputDialogs}/>
                <button onClick={addMessage} className={classes.buttonDialogs}>Send</button>
            </div>
        </div>
    )
}