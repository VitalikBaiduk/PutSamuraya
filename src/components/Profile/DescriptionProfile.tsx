import React from 'react';
import classes from "./DescriptionProfile.module.css";
import {ProfileType} from "../../redux/profileReducer";
import {EditableSpan} from "./EditableSpan/EditableSpan";

export type DescriptionProfileType = {
    profile: ProfileType
    params: any
    status: string
    updateStatus: (status: any) => void
}
export const DescriptionProfile = (props: DescriptionProfileType) => {

    let nameRender = () => {
        return props.params ? props.profile.fullName : "Vitalik Baiduk"
    }

    return (
        <div className={classes.content}>
            <div className={classes.nameAndActive}>
                <p className={classes.name}>
                    {nameRender()}
                </p>
                <p className={classes.active}>
                    Online
                </p>
            </div>
            <EditableSpan status={props.status} updateStatus={props.updateStatus}/>
            <div className={classes.descrOfHuman}>
                <div className={classes.elemDescrOfHuman}>
                    <p className={classes.textDescr}>Date of Birth:</p>
                    <p className={classes.elemDescf}>05 May 2002</p>
                </div>
                <div className={classes.elemDescrOfHuman}>
                    <p className={classes.textDescr}>City:</p>
                    <p className={classes.elemDescf}>Brest</p>
                </div>
                <div className={classes.elemDescrOfHuman}>
                    <p className={classes.textDescr}>Place of study:</p>
                    <p className={classes.elemDescf}>Brest State University named after A.S. Pushkin</p>
                </div>
            </div>
        </div>
    )
}
