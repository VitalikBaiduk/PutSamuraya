import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
import {ArrOfPeopleType} from "../../redux/friendsReducer";


type mapStateToPropsType = {
    friends: Array<ArrOfPeopleType>
}

export type FriendsPropsType = mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.friendsReducer.friends
    }
}
let mapDispatchToProps = () => {
    return {}
}
export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)