import React, {ChangeEvent} from 'react';
import classes from "./Post.module.css";
import {PropsType} from "./PostContainer";

// type PropsType = {
//     newInputValue: string
//     posts: Array<ArrPostsType>
//     addPosts: () => void
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void
// }

export const Posts = (props: PropsType) => {

    const onAddPosts = () => {
        props.addPosts()
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e)
    }
    return (

        <div className={classes.post}>
            <div className={classes.mainInput}>
                <input placeholder='Enter your post'
                       className={classes.inputProfile}
                       value={props.newInputValue}
                       onChange={onPostChange}/>
                <button onClick={onAddPosts} className={classes.buttonProfile}>Add post
                </button>
            </div>
            {props.posts.map((p) => {
                return <div key={p.id}><p className={classes.textPost}>{p.text}</p></div>
            })}

        </div>
    )
}
