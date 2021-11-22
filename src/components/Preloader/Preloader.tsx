import classes from "../Friends/Friends.module.css";
import preloader from "../../img/Double Ring-1s-200px.svg";
import React from "react";

export const Preloader = () => {
    return (
        <div className={classes.loader} >
            <img src={preloader}/>
        </div>
    )

}