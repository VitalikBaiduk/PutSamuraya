import React from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {Posts} from "./Post/Posts";
import {Input} from "./Post/Input";
import {ActionType, ArrPostsType} from "../../redux/state";


export type ProfileType = {
    posts: Array<ArrPostsType>
    dispatch: (action: ActionType) => void
    newInputValue: string
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={classes.mainContent}>
            <div className={classes.content}>
                <ProtoAndInfo/>
                <DescriptionProfile/>
            </div>
            <Input dispatch={props.dispatch}
                   newInputValue={props.newInputValue}
            />
            <Posts posts={props.posts}/>
        </div>
    )
}