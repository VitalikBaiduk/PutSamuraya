import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
import {ArrOfPeopleType, followAC, setUsersAC, unFollowAC} from "../../redux/friendsReducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    friends: Array<ArrOfPeopleType>
}
type mapDispatchToPropsType = {
    follow: (humanId: number) => void
    unFollow: (humanId: number) => void
    setUsers: (users: Array<ArrOfPeopleType>) => void
}
export type FriendsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.friendsReducer.friends
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
        }
    }
}
export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)