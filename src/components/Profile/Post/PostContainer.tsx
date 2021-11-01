import {
    addPostActionCreator, ArrPostsType,
    changeInputValueActionCreator,
} from "../../../redux/profileReducer";
import React, {ChangeEvent} from "react";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../redux/redux-store";


type mapStateToPropsType = {
    newInputValue: string
    posts: Array<ArrPostsType>,
}
type mapDispatchToPropsType = {
    addPosts: () => void
    onChange: (text: ChangeEvent<HTMLInputElement>) => void
}
export type PropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newInputValue: state.profileReducer.newInputValue,
        posts: state.profileReducer.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPosts: () => {
            let state = store.getState()
            if (state.profileReducer.newInputValue) {
                dispatch(addPostActionCreator())
            }
        },
        onChange: (text: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeInputValueActionCreator(text.currentTarget.value))
        }
    }
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)