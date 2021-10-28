import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import {friendsReducerActionCreatorType} from "./friendsReducer";
import {addPostActionCreatorType, changeInputValueActionCreatorType} from "./profileReducer";

export type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType

export type ArrOfPeopleType = {
    id: number
    name: string
    img: string
}
export type ArrMessageType = {
    id: number
    message: string
}

const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
const sendMessage = "SEND-MESSAGE";

export type DialogsInitialStateType = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
    newMessageDialogs: string
}
let initialState: DialogsInitialStateType = {
    arrOfPeople: [
        {id: 1, name: "Andrew", img: img1},
        {id: 2, name: "Robin", img: img2},
        {id: 3, name: "Kate", img: img3},
        {id: 4, name: "Elise", img: img4},
        {id: 5, name: "Marta", img: img5},
        {id: 6, name: "Ksusha", img: img6}
    ],
    arrMessage: [
        {id: 1, message: "привет"},
        {id: 2, message: "как дела?"},
        {id: 3, message: "как учеба?"},
        {id: 4, message: "погнали гулять"},
        {id: 5, message: "кебаб?"},
        {id: 6, message: "может быть"},
    ],
    newMessageDialogs: "",
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionType): DialogsInitialStateType => {
    switch (action.type) {
        case updateNewMessageBody :
            state.newMessageDialogs = action.message
            return state
        case sendMessage :
            let newMessage = state.newMessageDialogs
            state.arrMessage.push({id: 6, message: newMessage})
            state.newMessageDialogs = ''
            return state
        default : {
            return state
        }
    }
}
export type updateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>
export const updateNewMessageBodyActionCreator = (message: string) => {
    return {
        type: updateNewMessageBody,
        message: message
    } as const
}

export type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator = () => {
    return {
        type: sendMessage,
    } as const
}