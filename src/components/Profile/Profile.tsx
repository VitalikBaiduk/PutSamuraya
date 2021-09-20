import React, {ChangeEvent, useState} from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {Posts} from "./Post/Posts";
import {Input} from "./Post/Input";
import {ArrPostsType} from "../../redux/state";


export type ProfileType = {
    posts: Array<ArrPostsType>
    addPost: () => void
    newInputValue: string
    changeInputValue: (newValue: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={classes.mainContent}>
            <div className={classes.content}>
                <ProtoAndInfo/>
                <DescriptionProfile/>
            </div>
            <Input addPost={props.addPost}
                   newInputValue={props.newInputValue}
                   changeInputValue={props.changeInputValue}
            />
            <Posts posts={props.posts}/>
        </div>
    )
}