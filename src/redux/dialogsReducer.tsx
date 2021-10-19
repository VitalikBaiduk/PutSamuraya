import {ActionType, StateType} from "./state";

const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
const sendMessage = "SEND-MESSAGE";
export const dialogsReducer = (state: StateType, action: ActionType) => {
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
export type updateNewMessageBodyActionCreator = ReturnType<typeof updateNewMessageBodyActionCreator>
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