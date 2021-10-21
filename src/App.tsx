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
import {AppStateType} from "./redux/redux-store";

type PropsTypeApp = {
    state: AppStateType
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
                            posts={props.state.profileReducer.posts}
                            dispatch={props.dispatch}
                            newInputValue={props.state.profileReducer.newInputValue}
                        />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            arrOfPeople={props.state.dialogsReducer.arrOfPeople}
                            arrMessage={props.state.dialogsReducer.arrMessage}
                            message={props.state.dialogsReducer.newMessageDialogs}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/friends" render={() =>
                        <Friends
                            friends={props.state.friendsReducer.friends}
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
