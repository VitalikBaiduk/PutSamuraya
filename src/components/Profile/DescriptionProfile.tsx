import React from 'react';
import classes from "./DescriptionProfile.module.css";

export const DescriptionProfile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.nameAndActive}>
                <p className={classes.name}>
                    Vitalik Baiduk
                </p>
                <p className={classes.active}>
                    Online
                </p>
            </div>
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
