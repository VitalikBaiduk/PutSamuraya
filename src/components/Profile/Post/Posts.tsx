import React from 'react';
import classes from "./Post.module.css";
import {ArrPostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<ArrPostsType>
}

export const Posts = (props: PropsType) => {

    return (
        <div className={classes.post}>
            {props.posts.map((p) => {
                return <div key={p.id} ><p className={classes.textPost}>{p.text}</p></div>
            })}
        </div>
    )
}