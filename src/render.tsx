import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeInputValue, StateType} from "./redux/state";


export let renderEntireThree = (props: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                addPost={addPost}
                posts={props.posts}
                arrOfPeople={props.arrOfPeople}
                arrMessage={props.arrMessage}
                newInputValue={props.newInputValue}
                changeInputValue={changeInputValue}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}