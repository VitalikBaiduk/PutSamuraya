import React from "react";
import classes from "./Friends.module.css";
import img2 from "../../img/img2.png";
import axios from "axios";

export class FriendsClass extends React.Component<any, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div className={classes.mainDiv}>
            <h3>People</h3>
            {
                this.props.friends.map((elem: any) => {
                    return (
                        <div key={elem.id} className={classes.mainFriendsDiv}>
                            <div className={classes.divFriends}>
                                <div className={classes.photoAndName}>
                                    <img className={classes.imgFriends}
                                         src={elem.photos.small !== null ? elem.img : img2}/>
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
                                            this.props.unFollow((elem.id))
                                        }} className={classes.unFollowStyle}>UNFOLLOW
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <button onClick={() => {
                                            this.props.follow((elem.id))
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

}