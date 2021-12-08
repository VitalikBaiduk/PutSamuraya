import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followingInProgressAC, followThunk, getFriendsThunkCreator,
    setCurrentPage, setPageThunkCreator,
    setTotalUsersCount,
    unFollow, unfollowThunk,
} from "../../redux/friendsReducer";
import React from "react";
import {Friends} from "./Friends";
import {Preloader} from "../Preloader/Preloader";


export const FriendsContainerComponent = (props: FriendsAPIComponentType) => {

    const getUsers = () => {
        props.getUsers(props.currentPage, props.pageSize)
    }

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
        friends: state.friendsReducer.friends,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching,
        followingInProgress: state.friendsReducer.followingInProgress
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