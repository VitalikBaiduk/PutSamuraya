import {ActionType, StateType} from "./state";

const changeinputvalue = "CHANGE-INPUT-VALUE";
export const reducerInputValue = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case changeinputvalue: {
            state.newInputValue = action.newValue
            return state
        }
        default : {
            return state
        }
    }
}

export type changeInputValueActionCreatorType = ReturnType<typeof changeInputValueActionCreator>
export const changeInputValueActionCreator = (newValue: string) => {
    return {
        type: changeinputvalue,
        newValue: newValue
    } as const
}