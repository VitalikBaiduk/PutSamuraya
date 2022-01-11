import React from 'react';
import classes from "./Profile.module.css";
import {ProtoAndInfo} from "./PhotoAndInfo";
import {DescriptionProfile} from "./DescriptionProfile";
import {PostContainer} from "./Post/PostContainer";
import {ProfileType} from "../../redux/profileReducer";


export type ProfilePropsType = {
    profile: ProfileType
    setUsersProfile: (profile: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    params: any
    status: string
    updateStatus: (status: any) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.mainContent}>
            <div className={classes.content}>
                <ProtoAndInfo profile={props.profile}
                              params={props.params}/>
                <DescriptionProfile profile={props.profile}
                                    params={props.params}
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                />
            </div>
            <PostContainer/>
        </div>
    );
}