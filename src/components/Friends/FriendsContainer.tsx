import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followingInProgressAC, followThunk, getFriendsThunkCreator,
    setCurrentPage, setPageThunkCreator,
    setTotalUsersCount,
    unFollow, unfollowThunk,
} from "../../redux/friendsReducer";
import React, {useState} from "react";
import {Friends} from "./Friends";
import {Preloader} from "../Preloader/Preloader";
import {
    followingInProgress,
    getPageSize,
    getTotalUsersCount,
    getRequestUsers,
    getСurrentPage,
    isFetching
} from "../../redux/users-selectors";


export const FriendsContainerComponent = (props: FriendsAPIComponentType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let [portionNumber, setPortionNumber] = useState(1)
    // let portionCount = Math.ceil(pageCount / 10)
    // let leftBorder = (portionNumber - 1) * 10 + 1
    // let rightBorder = portionNumber * 10

    const getUsers = () => {
        props.getUsers(props.currentPage, props.pageSize)
    }

    let pages: Array<number> = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let setPage = (el: number) => {
        props.setPageThunkCreator(el, props.pageSize)
    }

    return (
        <>
            {props.isFetching ?
                <Preloader/>
                :
                <Friends
                    currentPage={props.currentPage}
                    friends={props.friends}
                    unfollowThunk={props.unfollowThunk}
                    followThunk={props.followThunk}
                    getUsers={getUsers}
                    pages={pages}
                    setPage={setPage}
                    followingInProgress={props.followingInProgress}
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
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
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    followingInProgressAC: (following: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setPageThunkCreator: (el: number, pageSize: number) => void
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: getRequestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getСurrentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    }
}
type FriendsAPIComponentType = mapStateToPropsType & mapDispatchToPropsType

export const FriendsContainer = connect(mapStateToProps,
    {
        unFollow,
        setCurrentPage,
        setTotalUsersCount,
        followingInProgressAC,
        getUsers: getFriendsThunkCreator,
        setPageThunkCreator,
        followThunk,
        unfollowThunk,
    }
)(FriendsContainerComponent)