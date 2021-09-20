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
import {ArrMessageType, ArrOfPeopleType, ArrPostsType} from "./redux/state";

type PropsTypeApp = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
    posts: Array<ArrPostsType>
    addPost: () => void
    newInputValue: string
    changeInputValue: (newValue: string) => void
}

function App(props: PropsTypeApp) {
    return (
        <BrowserRouter>
            asads
            <div className={"mainPage"}>
                <Header/>
                <div className={"mainContent"}>
                    <Nav/>
                    <Route path="/profile" render={() =>
                        <Profile
                            posts={props.posts}
                            addPost={props.addPost}
                            newInputValue={props.newInputValue}
                            changeInputValue={props.changeInputValue}
                        />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            arrOfPeople={props.arrOfPeople}
                            arrMessage={props.arrMessage}
                        />}/>
                    <Route path="/friends" component={Friends}/>
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
