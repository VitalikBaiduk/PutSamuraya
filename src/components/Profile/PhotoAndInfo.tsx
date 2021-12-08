import React from 'react';
import classes from "./Profile.module.css";
import {ProfileType} from "../../redux/profileReducer";
import {Preloader} from "../Preloader/Preloader";
import user from "../../img/user (1).png";
import photoFromProfile from "../../img/photoFromProfile.jpg"


export type ProtoAndInfoType = {
    profile: ProfileType
    params: any
}
export const ProtoAndInfo = (props: ProtoAndInfoType) => {

    if (!Object.keys(props.profile).length) {
        return <Preloader/>
    }
    let imgRender = () => {
        return props.params ?
            <img className={classes.photo} src={props.profile.photos.large ? props.profile.photos.large : user}/>
            :
            <img className={classes.photo}
                 src={photoFromProfile}/>
    }

    return (
        <div className={classes.photoAndInfo}>
            {imgRender()}
            <div className={classes.statistics}>
                <img className={classes.logo} src="https://img.icons8.com/ios/50/000000/statistics.png"/>
                <p className={classes.text}>Statistics</p>
            </div>
            <div className={classes.statistics}>
                <img className={classes.logo}
                     src="https://img.icons8.com/ios/50/000000/no-reminders.png"/>
                <p className={classes.text}>Reminders</p>
            </div>
        </div>
    )
}