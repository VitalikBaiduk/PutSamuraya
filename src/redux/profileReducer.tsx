import {ActionType, ArrPostsType, StateType} from "./state";

const addpost = "ADD-POST";
const changeinputvalue = "CHANGE-INPUT-VALUE";

export type profileReducerStateType = {
    posts: Array<ArrPostsType>,
    newInputValue: string
}

let initialState = {
    posts: [],
    newInputValue: "",
}
export const profileReducer = (state: profileReducerStateType = initialState, action: ActionType): profileReducerStateType => {
    switch (action.type) {
        case addpost :
            let newPost = {id: 2, text: state.newInputValue, likeCount: 2};
            state.posts = [...state.posts, newPost]
            state.newInputValue = ''
            return state
        case changeinputvalue:
            state.newInputValue = action.newValue
            return state
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