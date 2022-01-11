import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, ProfileType, setUsersProfile, setUserThunkCreator, updateStatus} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/friendsReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainerComponent extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 20485
        }
        this.props.setUserThunkCreator(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        setUsersProfile={this.props.setUsersProfile}
                        toggleIsFetching={this.props.toggleIsFetching}
                        params={this.props.match.params.userId}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}

export type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType
    status:string
}

export type mapDispatchToPropsType = {
    setUsersProfile: (profile: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUserThunkCreator: (userId: number) => void
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile,
        status:state.profileReducer.status
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersProfile,
        toggleIsFetching,
        setUserThunkCreator,
        getStatus,
        updateStatus,
    }),
    withRouter,
    withAuthRedirect
)
(ProfileContainerComponent);
