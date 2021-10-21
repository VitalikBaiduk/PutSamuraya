import React from 'react';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import {addPostActionCreatorType, changeInputValueActionCreatorType, profileReducer} from "./profileReducer";
import {
    dialogsReducer,
    sendMessageActionCreatorType,
    updateNewMessageBodyActionCreatorType
} from "./dialogsReducer";
import {friendsReducerActionCreatorType} from "./friendsReducer";

let renderEntireThree = (props: StateType) => {
    console.log("state changed")
}
export type ArrOfPeopleType = {
    id: number
    name: string
    img: string
}
export type ArrMessageType = {
    id: number
    message: string
}
export type ArrPostsType = {
    id: number
    text: string;
    likeCount: number
}

export type StateType = {
    arrOfPeople: Array<ArrOfPeopleType>
    arrMessage: Array<ArrMessageType>
    posts: Array<ArrPostsType>
    newInputValue: string
    friends: Array<ArrOfPeopleType>
    newMessageDialogs: string
}

export type StoreType = {
    _state: StateType
    _addPost: () => void
    _changeInputValue: (newValue: string) => void
    subscribe: (subscriber: (props: StateType) => void) => void
    getState: () => StateType
    _renderEntireThree: () => void
    dispatch: (action: ActionType) => void
}

export type ActionType = addPostActionCreatorType
    | changeInputValueActionCreatorType
    | updateNewMessageBodyActionCreatorType
    | sendMessageActionCreatorType
    | friendsReducerActionCreatorType
export let store: StoreType = {
    _state: {
        arrOfPeople: [
            {id: 1, name: "Andrew", img: img1},
            {id: 2, name: "Robin", img: img2},
            {id: 3, name: "Kate", img: img3},
            {id: 4, name: "Elise", img: img4},
            {id: 5, name: "Marta", img: img5},
            {id: 6, name: "Ksusha", img: img6}
        ],
        arrMessage: [
            {id: 1, message: "привет"},
            {id: 2, message: "как дела?"},
            {id: 3, message: "как учеба?"},
            {id: 4, message: "погнали гулять"},
            {id: 5, message: "кебаб?"},
            {id: 6, message: "может быть"},
        ],
        posts: [],
        newInputValue: '',
        newMessageDialogs: "",
        friends: [
            {id: 1, name: "Andrew Garfield", img: img1},
            {id: 2, name: "Robin Williams", img: img2},
            {id: 3, name: "Kate Winslet", img: img3},
            {id: 4, name: "Elise Eberle", img: img4},
            {id: 5, name: "Marta Dusseldorp", img: img5},
            {id: 6, name: "Brock Lesnar", img: img6}
        ]
    },
    _renderEntireThree() {
        console.log("state changed")
    },
    _addPost() {
        let newPost = {id: 2, text: this._state.newInputValue, likeCount: 2};
        this._state.posts = [...this._state.posts, newPost]
        this._state.newInputValue = ''
        renderEntireThree(this._state)
    }
    ,
    _changeInputValue(newValue: string) {
        this._state.newInputValue = newValue
        renderEntireThree(this._state)
    },
    subscribe(subscriber: (props: StateType) => void) {
        renderEntireThree = subscriber
    }
    ,
    getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        // this._state = profileReducer(this._state, action)
        // this._state = dialogsReducer(this._state, action)
        renderEntireThree(this._state)
    }
}