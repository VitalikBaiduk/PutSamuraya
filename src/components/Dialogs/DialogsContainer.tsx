import React, {ChangeEvent, KeyboardEvent} from "react";
import {
    ArrMessageType,
    ArrOfPeopleType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {Dispatch, EmptyObject, Store} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

// type DialogsContainerType = {
//     store: Store<EmptyObject & { profileReducer: profileReducerStateType, dialogsReducer: dialogsReducerType, friendsReducer: friendsReducerStateType }, ActionType>
// }

// export const DialogsContainer = () => {
// let state = props.store.getState()
//
// const addNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
//     props.store.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
// }
// const sendMessage = () => {
//     props.store.dispatch(sendMessageActionCreator())
// }
//
// const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//         props.store.dispatch(sendMessageActionCreator())
//     }
// }

//     return (
//         <div className={classes.dialogs}>
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//                         let state = store.getState()
//                         const addNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
//                             store.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
//                         }
//                         const sendMessage = () => {
//                             store.dispatch(sendMessageActionCreator())
//                         }
//
//                         const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
//                             if (e.key === "Enter") {
//                                 store.dispatch(sendMessageActionCreator())
//                             }
//                         }
//                         return <Dialogs
//                             arrOfPeople={state.dialogsReducer.arrOfPeople}
//                             arrMessage={state.dialogsReducer.arrMessage}
//                             message={state.dialogsReducer.newMessageDialogs}
//                             addNewMessage={addNewMessage}
//                             sendMessage={sendMessage}
//                             pressEnter={pressEnter}
//                         />
//                     }
//                 }
//             </StoreContext.Consumer>
//         </div>
//     )
// }

type mapStateToPropsType = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
    newMessageDialogs: string
}
type mapDispatchToPropsType = {
    addNewMessage: (e: ChangeEvent<HTMLInputElement>) => void
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
        addNewMessage: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
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