import React from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {PostContainer} from "./Post/PostContainer";


export type ProfileType = {
    // posts: Array<ArrPostsType>
    // dispatch: (action: ActionType) => void
    // newInputValue: string
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={classes.mainContent}>
            <div className={classes.content}>
                <ProtoAndInfo/>
                <DescriptionProfile/>
            </div>
            <PostContainer/>
        </div>
    );
}