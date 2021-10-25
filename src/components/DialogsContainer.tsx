import {ActionType, ArrMessageType, ArrOfPeopleType} from "../redux/state";
import {DialogsItem} from "./Dialogs/DialogsItem/DialogsItem";
import {MessageOfDialog} from "./Dialogs/MessangeOfDialogs/MessageOfDialog";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {dialogsReducerType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../redux/dialogsReducer";
import classes from "./Dialogs/Dialogs.module.css";
import {EmptyObject, Store} from "redux";
import {profileReducerStateType} from "../redux/profileReducer";
import {friendsReducerStateType} from "../redux/friendsReducer";
import {Dialogs} from "./Dialogs/Dialogs";

type DialogsContainerType = {
    store: Store<EmptyObject & { profileReducer: profileReducerStateType, dialogsReducer: dialogsReducerType, friendsReducer: friendsReducerStateType }, ActionType>
}

export const DialogsContainer = (props: DialogsContainerType) => {
    let state = props.store.getState()

    const addNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
    }
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.store.dispatch(sendMessageActionCreator())
        }
    }

    return (
        <div className={classes.dialogs}>
            <Dialogs
                arrOfPeople={state.dialogsReducer.arrOfPeople}
                arrMessage={state.dialogsReducer.arrMessage}
                message={state.dialogsReducer.newMessageDialogs}
                addNewMessage={addNewMessage}
                sendMessage={sendMessage}
                pressEnter={pressEnter}
            />
        </div>
    )
}