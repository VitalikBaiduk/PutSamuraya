import {AnyAction, Dispatch} from "redux";
import {authApi} from "../api/api";
import {AxiosResponse} from "axios";

type ActionType = setUserDataType

export type initialStateType = {
    userId: null
    email: null
    login: null
    isAuth: boolean
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA"  :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default :
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId: any, email: any, login: any) => {
    return {
        type: "SET_USER_DATA",
        data: {
            userId: userId,
            email: email,
            login: login,
        }
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.me()
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUserData(id, email, login))
        }
        return res
    } catch (err) {

    }
}