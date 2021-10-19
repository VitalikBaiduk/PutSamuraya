import {ActionType, StateType} from "./state";

const addpost = "ADD-POST";

export const postReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case addpost :
            let newPost = {id: 2, text: state.newInputValue, likeCount: 2};
            state.posts = [...state.posts, newPost]
            state.newInputValue = ''
            return state
        default :
            return state

    }
}

export  type addPostActionCreatorType  = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: addpost
    } as const
}