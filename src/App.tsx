import React, {Component} from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Community} from "./components/Community/Community";
import {Photo} from "./components/Photo/Photo";
import {Music} from "./components/Music/Music";
import {Games} from "./components/Games/Games";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainerComponent";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {initialize} from "./redux/appReducer";
import {Preloader} from "./components/Preloader/Preloader";

class App extends Component<any, any> {
    componentDidMount() {
        this.props.initialize()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className={"mainPage"}>
                    <HeaderContainer/>
                    <div className={"mainContent"}>
                        <Nav/>
                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/dialogs" render={() =>
                            <DialogsContainer/>}/>
                        <Route path="/friends" render={() =>
                            <FriendsContainer/>}/>
                        <Route path="/community" component={Community}/>
                        <Route path="/photo" component={Photo}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/games" component={Games}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            );
        }
    }

}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.appReducer.initialized
    }
}
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,
        {initialize}))
(App)