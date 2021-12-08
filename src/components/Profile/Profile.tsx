import React from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {PostContainer} from "./Post/PostContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";


export type ProfilePropsType = {
    profile: ProfileType
    setUsersProfile: (profile: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    params: any
    isAuth: boolean
}
export const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) return <Redirect to="/login"/>
    return (
        <div className={classes.mainContent}>
            <div className={classes.content}>
                <ProtoAndInfo profile={props.profile} params={props.params}/>
                <DescriptionProfile profile={props.profile} params={props.params}/>
            </div>
            <PostContainer/>
        </div>
    );
}