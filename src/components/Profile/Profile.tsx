import React from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {ActionType, ArrPostsType} from "../../redux/state";
import {PostContainer} from "./Post/PostContainer";
import {store} from "../../redux/redux-store";


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
            <PostContainer
                store={store}/>
        </div>
    );
}