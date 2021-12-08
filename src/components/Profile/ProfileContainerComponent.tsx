import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile, setUserThunkCreator} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/friendsReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";


class ProfileContainerComponent extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserThunkCreator(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        setUsersProfile={this.props.setUsersProfile}
                        toggleIsFetching={this.props.toggleIsFetching}
                        params={this.props.match.params.userId}
                        isAuth={this.props.isAuth}
        />
    }
}

export type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType
}

export type mapDispatchToPropsType = {
    setUsersProfile: (profile: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUserThunkCreator: (userId: number) => void
    isAuth:boolean
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile,
        isAuth:state.autnReducer.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)

export const ProfileContainer = connect(mapStateToProps, {
    setUsersProfile,
    toggleIsFetching,
    setUserThunkCreator
})(WithUrlDataContainerComponent)
