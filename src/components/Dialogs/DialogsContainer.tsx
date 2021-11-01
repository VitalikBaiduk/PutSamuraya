import React, {ChangeEvent, KeyboardEvent} from "react";
import {
    ArrMessageType,
    ArrOfPeopleType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
    newMessageDialogs: string
}
type mapDispatchToPropsType = {
    addNewMessage: (text: string) => void
    sendMessage: () => void
    pressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        arrOfPeople: state.dialogsReducer.arrOfPeople,
        arrMessage: state.dialogsReducer.arrMessage,
        newMessageDialogs: state.dialogsReducer.newMessageDialogs
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewMessage: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        pressEnter: (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                dispatch(sendMessageActionCreator())
            }
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)