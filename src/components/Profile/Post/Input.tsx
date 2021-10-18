import React, {ChangeEvent} from 'react';
import classes from "./Post.module.css";
import {ActionType, addPostActionCreator, changeInputValueActionCreator} from "../../../redux/state";


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