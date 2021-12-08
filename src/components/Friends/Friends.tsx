import classes from "./Friends.module.css";
import user from "../../img/user (1).png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type FriendsPropsType = {
    currentPage: number
    friends: any[]
    unfollowThunk: (id: number) => void
    followThunk: (id: number) => void
    getUsers: () => void
    pages: Array<number>
    setPage: (el: number) => void
    followingInProgress: number[]
}

export const Friends = (props: FriendsPropsType) => {
    return <div className={classes.mainDiv}>
        <button onClick={props.getUsers}>Get users</button>
        <h3>People</h3>
        {props.pages.map((el) => {
            return <span onClick={() => {
                props.setPage(el)
            }} className={props.currentPage === el ? classes.currentEl : ""}>{el}</span>
        })}
        {
            props.friends.map((elem) => {
                return (
                    <div key={elem.id} className={classes.mainFriendsDiv}>
                        <div className={classes.divFriends}>
                            <div className={classes.photoAndName}>
                                <NavLink to={'/profile/' + elem.id}>
                                    <img className={classes.imgFriends}
                                         src={elem.photos.small !== null ? elem.img : user}/>
                                </NavLink>
                                <h4 className={classes.nameOfPeoples}>{elem.name}</h4>
                            </div>
                            <div className={classes.addressInfo}>
                                <p className={classes.country}>{"Belarus"}</p>
                                <p className={classes.city}>{"Brest"}</p>
                            </div>
                        </div>
                        {
                            elem.followed ?
                                <div>
                                    <button disabled={props.followingInProgress.some(id => id === elem.id)}
                                            onClick={() => {
                                                props.unfollowThunk(elem.id)
                                            }} className={classes.unFollowStyle}>UNFOLLOW
                                    </button>
                                </div>
                                :
                                <div>
                                    <button disabled={props.followingInProgress.some(id => id === elem.id)}
                                            onClick={() => {
                                                props.followThunk(elem.id)
                                            }} className={classes.followStyle}>FOLLOW
                                    </button>
                                </div>
                        }
                    </div>
                )
            })
        }
    </div>

}