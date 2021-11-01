import React from 'react';
import classes from "./Friends.module.css"
import {FriendsPropsType} from "./FriendsContainer";


export const Friends = (props: FriendsPropsType) => {

    let divPeople = props.friends.map((elem) => {
        return (
            <div key={elem.id} className={classes.mainFriendsDiv}>
                <div className={classes.divFriends}>
                    <div className={classes.photoAndName}>
                        <img className={classes.imgFriends} src={elem.img}/>
                        <h4 className={classes.nameOfPeoples}>{elem.name}</h4>
                    </div>
                    <div className={classes.addressInfo}>
                        <p className={classes.country}>{elem.address.country}</p>
                        <p className={classes.city}>{elem.address.city}</p>
                    </div>
                </div>
                {
                    elem.followed ?
                        <div>
                            <button onClick={() => {
                                props.unFollow((elem.id))
                            }} className={classes.unFollowStyle}>UNFOLLOW
                            </button>
                        </div>
                        :
                        <div>
                            <button onClick={() => {
                                props.follow((elem.id))
                            }} className={classes.followStyle}>FOLLOW
                            </button>
                        </div>
                }

            </div>
        )
    })
    return <div className={classes.mainDiv}>
        <h3>People</h3>
        {divPeople}
    </div>
}