import React, {useState} from 'react';
import classes from "./Friends.module.css"
import {FriendsPropsType} from "./FriendsContainer";
import img2 from "../../img/img2.png";
import axios from "axios";

export const Friends = (props: FriendsPropsType) => {

    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then((response) => {
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalUsersCount)
            })
    }
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let setPage = (el: number) => {
        props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${props.pageSize}`)
            .then((response) => {
                props.setUsers(response.data.items)
            })
    }

    return <div className={classes.mainDiv}>
        <button onClick={getUsers}>Get users</button>
        <h3>People</h3>
        {pages.map((el) => {
            return <span onClick={() => {
                setPage(el)
            }} className={props.currentPage === el ? classes.currentEl : ""}>{el}</span>
        })}
        {
            props.friends.map((elem) => {
                return (
                    <div key={elem.id} className={classes.mainFriendsDiv}>
                        <div className={classes.divFriends}>
                            <div className={classes.photoAndName}>
                                <img className={classes.imgFriends} src={elem.photos.small !== null ? elem.img : img2}/>
                                <h4 className={classes.nameOfPeoples}>{elem.name}</h4>
                            </div>
                            <div className={classes.addressInfo}>
                                <p className={classes.country}>{"elem.address.country"}</p>
                                <p className={classes.city}>{"elem.address.city"}</p>
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
        }
    </div>
}