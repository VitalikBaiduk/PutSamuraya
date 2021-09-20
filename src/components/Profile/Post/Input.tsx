import React, {ChangeEvent} from 'react';
import classes from "./Post.module.css";


export type InputPropsType = {
    addPost: () => void
    newInputValue: string
    changeInputValue: (newValue: string) => void
}

export const Input = (props: InputPropsType) => {

    const addPosts = () => {
        if(props.newInputValue){
            props.addPost()
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(e.currentTarget.value)
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