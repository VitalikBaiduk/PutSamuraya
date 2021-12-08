import {Dispatch} from "redux";
import {authApi} from "../api/api";

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

export const getAuthUserData = () => {
  return (dispatch:Dispatch) =>{
      authApi.me().then((response) => {
          if (response.data.resultCode === 0) {
              let {id, email, login} = response.data.data
              dispatch(setUserData(id, email, login))
          }
      })
  }
}