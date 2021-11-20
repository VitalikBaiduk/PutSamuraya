import {connect} from "react-redux";
import {Friends} from "./Friends";
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
export type FriendsPropsType = mapStateToPropsType & mapDispatchToPropsType

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


export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)