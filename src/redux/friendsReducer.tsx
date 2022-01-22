import {addPostActionCreatorType, changeInputValueActionCreatorType} from "./profileReducer";
import {sendMessageActionCreatorType, updateNewMessageBodyActionCreatorType} from "./dialogsReducer";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

export type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType
    | followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | followingInProgressACType

export type PeopleType = {
    id: number
    followed: boolean
    name: string
    img: string
    address: {
        country: string
        city: string
    }
}
export type friendsReducerStateType = {
    friends: Array<PeopleType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: friendsReducerStateType = {
    friends: [],
    pageSize: 4,
    totalUsersCount: 150,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const friendsReducer = (state: friendsReducerStateType = initialState, action: ActionType): friendsReducerStateType => {
    switch (action.type) {
        case "ARR-PEOPLE":
            return state
        case "FOLLOW":
            return {
                ...state,
                friends: state.friends.map((human) => {
                    return human.id === action.humanId ? {...human, followed: true} : human
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                friends: state.friends.map((human) => {
                    return human.id === action.humanId ? {...human, followed: false} : human
                })
            }

        case "SET_USERS":
            return {
                ...state,
                friends: [...action.users]
            }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case "TOGGLE_ISFETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "FOLLOWING": {
            console.log(state.followingInProgress)
            return {
                ...state,
                followingInProgress: action.following ?
                    [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}

export type friendsReducerActionCreatorType = ReturnType<typeof friendsReducerActionCreator>
export const friendsReducerActionCreator = () => {
    return {
        type: "ARR-PEOPLE"
    } as const
}

export type followACType = ReturnType<typeof follow>
export const follow = (humanId: number) => {
    return {
        type: "FOLLOW",
        humanId: humanId
    } as const
}

export type unFollowACType = ReturnType<typeof unFollow>
export const unFollow = (humanId: number) => {
    return {
        type: "UNFOLLOW",
        humanId: humanId
    } as const
}

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<PeopleType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
}

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        usersCount
    } as const
}

export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_ISFETCHING",
        isFetching
    } as const
}

export type followingInProgressACType = ReturnType<typeof followingInProgressAC>
export const followingInProgressAC = (following: boolean, id: number) => {
    return {
        type: "FOLLOWING",
        following,
        id
    } as const
}

export const getFriendsThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
            })
    }
}

export const setPageThunkCreator = (el: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(el))
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(el, pageSize)
            .then((response) => {
                dispatch(setUsers(response.items))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const followThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, id))
        usersApi.followUser(id).then((response) => {
            if (response.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(followingInProgressAC(false, id))
        })

    }
}
export const unfollowThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, id))
        usersApi.unfollowUser(id).then((response) => {
            if (response.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(followingInProgressAC(false, id))
        })

    }
}