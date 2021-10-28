import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {MessageOfDialog} from "./MessangeOfDialogs/MessageOfDialog";
import {DialogsPropsType} from "./DialogsContainer";

export type ArrOfPeopleType = {
    id: number
    name: string
    img: string
}
export type ArrMessageType = {
    id: number
    message: string
}
//
// type DialogsPropsType = {
//     arrOfPeople: Array<ArrOfPeopleType>
//     arrMessage: Array<ArrMessageType>
//     message: string
//     addNewMessage: (e: ChangeEvent<HTMLInputElement>) => void
//     sendMessage: () => void
//     pressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
// }

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

    const addNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
        props.addNewMessage(e)
    }
    const sendMessage = () => {
        props.sendMessage()
    }

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.pressEnter(e)
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsPeoples}>
                {dialogsPeople}
            </div>
            <div className={classes.messagePeople}>
                {dialogsMessage}
                <div className={classes.inputAndButtonDialogs}>
                    <input onKeyPress={pressEnter} placeholder="Enter your message" onChange={addNewMessage}
                           value={props.newMessageDialogs}
                           className={classes.inputDialogs}/>
                    <button onClick={sendMessage} className={classes.buttonDialogs}>Send</button>
                </div>
            </div>
        </div>
    )
}