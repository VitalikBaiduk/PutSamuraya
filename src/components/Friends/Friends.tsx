import React from 'react';
import classes from "./Friends.module.css"
import {FriendsPropsType} from "./FriendsContainer";


export const Friends = (props: FriendsPropsType) => {

    let divPeople = props.friends.map((elem) => {
        return (
            <div className={classes.divFriends}>
                <img className={classes.imgFriends} src={elem.img}/>
                <h4 className={classes.nameOfPeoples}>{elem.name}</h4>
            </div>
        )
    })
    return <div className={classes.mainDiv}>
        <h3>All friends</h3>
        {divPeople}
    </div>
}