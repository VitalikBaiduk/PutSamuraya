import classes from "./Friends.module.css";
import img2 from "../../img/img2.png";
import React from "react";

export type FriendsPropsType = {
    currentPage: number
    friends: any[]
    unFollow: (humanId: number) => void
    follow: (humanId: number) => void
    getUsers: () => void
    pages: Array<number>
    setPage: (el: number) => void
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