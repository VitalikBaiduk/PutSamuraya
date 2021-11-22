import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import {addPostActionCreatorType, changeInputValueActionCreatorType} from "./profileReducer";
import {sendMessageActionCreatorType, updateNewMessageBodyActionCreatorType} from "./dialogsReducer";

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

export type ArrOfPeopleType = {
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
    friends: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: friendsReducerStateType = {
    friends: [
        // {id: 1, followed: false, name: "Andrew Garfield", img: img1, address: {country: "Belarus", city: "Brest"}},
        // {id: 2, followed: true, name: "Robin Williams", img: img2, address: {country: "Belarus", city: "Minsk"}},
        // {id: 3, followed: false, name: "Kate Winslet", img: img3, address: {country: "Russia", city: "Moscow"}},
        // {id: 4, followed: true, name: "Elise Eberle", img: img4, address: {country: "USA", city: "LA"}},
        // {id: 5, followed: false, name: "Marta Dusseldorp", img: img5, address: {country: "Ukraine", city: "Kiev"}},
        // {id: 6, followed: true, name: "Brock Lesnar", img: img6, address: {country: "Belarus", city: "Baranovichi"}}
    ],
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
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
export const setUsers = (users: Array<ArrOfPeopleType>) => {
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