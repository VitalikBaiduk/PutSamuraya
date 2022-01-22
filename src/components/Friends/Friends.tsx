import classes from "./Friends.module.css";
import user from "../../img/user (1).png";
import React, {useState} from "react";
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
    totalUsersCount: number
    pageSize: number
}

export const Friends = (props: FriendsPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pageCount / 10)
    let leftBorder = (portionNumber - 1) * 10 + 1
    let rightBorder = portionNumber * 10


    return <div className={classes.mainDiv}>
        <button onClick={props.getUsers}>Get users</button>
        <h3>People</h3>
        {
            portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Back</button>
        }
        {
            props.pages
                .filter((el) => {
                    return el >= leftBorder && el <= rightBorder
                }).map((el) => {
                return <span onClick={() => {
                    props.setPage(el)
                }} className={props.currentPage === el ? classes.currentEl : ""}>{el}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
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