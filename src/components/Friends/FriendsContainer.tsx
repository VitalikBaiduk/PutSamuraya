import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    ArrOfPeopleType,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow
} from "../../redux/friendsReducer";
import axios from "axios";
import React from "react";
import {Friends} from "./Friends";
import {Preloader} from "../Preloader/Preloader";


export const FriendsContainerComponent = (props: FriendsAPIComponentType) => {

    const getUsers = () => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then((response) => {
                props.toggleIsFetching(false)
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
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${props.pageSize}`)
            .then((response) => {
                props.setUsers(response.data.items)
                props.toggleIsFetching(false)
            })
    }
    return (
        <>
            {props.isFetching ?
                <Preloader/>
                :
                <Friends
                    currentPage={props.currentPage}
                    friends={props.friends}
                    unFollow={props.unFollow}
                    follow={props.follow}
                    getUsers={getUsers}
                    pages={pages}
                    setPage={setPage}
                />}

        </>
    )
}

type mapStateToPropsType = {
    friends: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (humanId: number) => void
    unFollow: (humanId: number) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.friendsReducer.friends,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching
    }
}
export type FriendsAPIComponentType = mapStateToPropsType & mapDispatchToPropsType


export const FriendsContainer = connect(mapStateToProps,
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
    }
)(FriendsContainerComponent)