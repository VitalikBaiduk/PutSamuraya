import {ActionType, StateType} from "./state";

const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
export const reducerNewMessageDialogs = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case updateNewMessageBody : {
            state.newMessageDialogs = action.message
            return state
        }
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