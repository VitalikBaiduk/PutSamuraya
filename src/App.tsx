import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Friends} from "./components/Friends/Friends";
import {Community} from "./components/Community/Community";
import {Photo} from "./components/Photo/Photo";
import {Music} from "./components/Music/Music";
import {Games} from "./components/Games/Games";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";

function App() {
    return (
        <div className={"mainPage"}>
            <Header/>
            <div className={"mainContent"}>
                <Nav/>
                <Route path="/profile" render={() =>
                    <Profile/>}/>
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
            </div>
        </div>
    );
}

export default App;
