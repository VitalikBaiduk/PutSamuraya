import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: mapStateToPropsType) => {
        if (!props.isAuth) return <Redirect to="/login"/>
        return (
            <Component {...props}/>
        )

    }
    return connect(mapStateToProps)(RedirectComponent)
}
