import {ActionType, StateType} from "./state";

const sendMessage = "SEND-MESSAGE";
export const reducerArrMessage = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case sendMessage : {
            let newMessage = state.newMessageDialogs
            state.arrMessage.push({id: 6, message: newMessage})
            state.newMessageDialogs = ''
            return state
        }
        default : {
            return state
        }
    }
}

export type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator = () => {
    return {
        type: sendMessage,
    } as const
}