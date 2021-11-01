import {sendMessageActionCreatorType, updateNewMessageBodyActionCreatorType} from "./dialogsReducer";
import {friendsReducerActionCreatorType} from "./friendsReducer";

const addpost = "ADD-POST";
const changeinputvalue = "CHANGE-INPUT-VALUE";

type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType

export type ArrPostsType = {
    id: number
    text: string;
    likeCount: number
}
export type initialStateType = {
    posts: Array<ArrPostsType>,
    newInputValue: string
}

let initialState: initialStateType = {
    posts: [],
    newInputValue: "",
}
export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case addpost :
            let newPost = {id: 2  , text: state.newInputValue, likeCount: 2};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newInputValue: ''
            }
        case changeinputvalue:
            return {
                ...state,
                newInputValue: action.newValue
            }
        default :
            return state
    }
}

export  type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: addpost
    } as const
}

export type changeInputValueActionCreatorType = ReturnType<typeof changeInputValueActionCreator>
export const changeInputValueActionCreator = (newValue: string) => {
    return {
        type: changeinputvalue,
        newValue: newValue
    } as const
}