import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom";
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
import {Login} from "./components/Login";

function App() {
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

export default App;
