import React from 'react';
import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}
export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default :
            return state
    }
}

type setInitializedType = ReturnType<typeof setInitialized>
let setInitialized = () => {
    return {
        type: "SET_INITIALIZED"
    } as const
}
export const initialize = () => {
    return (dispatch: Dispatch<any>) => {
        let promise = dispatch(getAuthUserData())
        //@ts-ignore
        promise.then(() => {
            dispatch(setInitialized())
        })
    }
}


type  ActionType = setInitializedType
