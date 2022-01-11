import {sendMessageActionCreatorType, updateNewMessageBodyActionCreatorType} from "./dialogsReducer";
import {friendsReducerActionCreatorType, toggleIsFetching} from "./friendsReducer";
import {profileApi, usersApi} from "../api/api";
import {Dispatch} from "redux";

type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType
    | setUsersProfileType
    | setStatusType

export type ArrPostsType = {
    id: number
    text: string;
    likeCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type initialStateType = {
    profile: ProfileType,
    posts: Array<ArrPostsType>,
    newInputValue: string
    status: string
}

let initialState: initialStateType = {
    profile: {} as ProfileType,
    posts: [] as Array<ArrPostsType>,
    newInputValue: "",
    status: "",
}
export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST" :
            let newPost = {id: 2, text: state.newInputValue, likeCount: 2};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newInputValue: ''
            }
        case "CHANGE-INPUT-VALUE":
            return {
                ...state,
                newInputValue: action.newValue
            }
        case "SET_USERS_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default :
            return state
    }
}

export  type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}

export type changeInputValueActionCreatorType = ReturnType<typeof changeInputValueActionCreator>
export const changeInputValueActionCreator = (newValue: string) => {
    return {
        type: "CHANGE-INPUT-VALUE",
        newValue: newValue
    } as const
}
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: "SET_USERS_PROFILE",
        profile
    } as const
}

export type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}


export const setUserThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.setUser(userId)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsersProfile(response.data))
            })
    }
}

export const getStatus = (userId: any) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId)
            .then((response) =>{
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status)
            .then((response) =>{
                debugger
                if (response.data.resultCode === 0){
                    // debugger
                    dispatch(setStatus(status))
                }
            })
    }
}

