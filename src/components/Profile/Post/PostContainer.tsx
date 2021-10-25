import {
    addPostActionCreator,
    changeInputValueActionCreator,
    profileReducerStateType
} from "../../../redux/profileReducer";
import React, {ChangeEvent} from "react";
import {ActionType, ArrPostsType} from "../../../redux/state";
import {Posts} from "./Posts";
import {EmptyObject, Store} from "redux";
import {dialogsReducerType} from "../../../redux/dialogsReducer";
import {friendsReducerStateType} from "../../../redux/friendsReducer";

export type PostContainerType = {
    store: Store<EmptyObject & { profileReducer: profileReducerStateType, dialogsReducer: dialogsReducerType, friendsReducer: friendsReducerStateType }, ActionType>
}
export const PostContainer = (props: PostContainerType) => {
    let state = props.store.getState()
    const addPosts = () => {
        if (props.store.getState().profileReducer.newInputValue) {
            props.store.dispatch(addPostActionCreator())
        }
    }
    const onChange = (text: ChangeEvent<HTMLInputElement>) => {
        props.store.dispatch(changeInputValueActionCreator(text.currentTarget.value))
    }
    return (
        <div>
            <Posts
                addPosts={addPosts}
                onChange={onChange}
                newInputValue={state.profileReducer.newInputValue}
                posts={state.profileReducer.posts}/>
        </div>
    )
}