import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";

export class HeaderContainerComponent extends React.Component<any, any> {

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderContainerComponent)