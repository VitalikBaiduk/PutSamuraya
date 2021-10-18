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
import {ActionType, StateType} from "./redux/state";

type PropsTypeApp = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: PropsTypeApp) {
    return (
        <BrowserRouter>
            <div className={"mainPage"}>
                <Header/>
                <div className={"mainContent"}>
                    <Nav/>
                    <Route path="/profile" render={() =>
                        <Profile
                            posts={props.state.posts}
                            dispatch={props.dispatch}
                            newInputValue={props.state.newInputValue}
                        />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            arrOfPeople={props.state.arrOfPeople}
                            arrMessage={props.state.arrMessage}
                            message={props.state.newMessageDialogs}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/friends" render={() =>
                        <Friends
                            friends={props.state.friends}
                        />}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/photo" component={Photo}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
