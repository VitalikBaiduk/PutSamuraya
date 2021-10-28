import React, {ChangeEvent} from 'react';
import classes from "./Post.module.css";
import {
    addPostActionCreator,
    addPostActionCreatorType,
    changeInputValueActionCreator, changeInputValueActionCreatorType
} from "../../../redux/profileReducer";
import {friendsReducerActionCreatorType} from "../../../redux/friendsReducer";
import {sendMessageActionCreatorType, updateNewMessageBodyActionCreatorType} from "../../../redux/dialogsReducer";

export type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType

export type InputPropsType = {
    dispatch: (action: ActionType) => void
    newInputValue: string
}


export const Input = (props: InputPropsType) => {

    const addPosts = () => {
        if (props.newInputValue) {
            props.dispatch(addPostActionCreator())
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeInputValueActionCreator(e.currentTarget.value))
    }
    return (
        <div className={classes.mainInput}>
            <input placeholder='Enter your post'
                   className={classes.inputProfile}
                   value={props.newInputValue}
                   onChange={onChange}/>
            <button onClick={addPosts} className={classes.buttonProfile}>Add post
            </button>
        </div>
    )
}