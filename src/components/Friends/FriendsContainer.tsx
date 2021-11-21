import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    ArrOfPeopleType,
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    unFollowAC
} from "../../redux/friendsReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Friends} from "./Friends";
import React from "react";


type mapStateToPropsType = {
    friends: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (humanId: number) => void
    unFollow: (humanId: number) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
}
export type FriendsAPIComponentType = mapStateToPropsType & mapDispatchToPropsType

export const FriendsContainerComponent = (props: FriendsAPIComponentType) => {

    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then((response) => {
                props.setUsers(response.data.items)
                console.log(response.data.totalUsersCount)
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
    return (
        <Friends
            currentPage={props.currentPage}
            friends={props.friends}
            unFollow={props.unFollow}
            follow={props.follow}
            getUsers={getUsers}
            pages={pages}
            setPage={setPage}
        />
    )
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.friendsReducer.friends,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        currentPage: state.friendsReducer.currentPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (humanId: number) => {
            dispatch(followAC(humanId))
        },
        unFollow: (humanId: number) => {
            dispatch(unFollowAC(humanId))
        },
        setUsers: (users: Array<ArrOfPeopleType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage(page: number) {
            dispatch(setCurrentPage(page))
        },
        setTotalUsersCount(usersCount: number) {
            dispatch(setTotalUsersCount(usersCount))
        }
    }
}


export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsContainerComponent)