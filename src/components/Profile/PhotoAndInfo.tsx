import React from 'react';
import classes from "./Profile.module.css";
import photoFromProfile from "../../img/photoFromProfile.jpg"

export const ProtoAndInfo = () => {
    return(
        <div className={classes.photoAndInfo}>
            <img className={classes.photo}
                 src={photoFromProfile}/>
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