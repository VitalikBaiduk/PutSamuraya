import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";

export class HeaderContainerComponent extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.autnReducer.isAuth,
        login: state.autnReducer.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setUserData, getAuthUserData})(HeaderContainerComponent)