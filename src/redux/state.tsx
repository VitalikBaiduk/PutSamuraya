import React from 'react';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import {renderEntireThree} from "../render";

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
}

export let state: StateType = {
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
    posts: [
        {id: 1, text: 'How are you?', likeCount: 1}
    ],
    newInputValue: ''
}

export const addPost = () => {
    let newPost = {id: 2, text: state.newInputValue, likeCount: 2};
    state.posts.push(newPost);
    state.newInputValue = ''
    renderEntireThree(state)
}
export const changeInputValue = (newValue: string) => {
    state.newInputValue = newValue
    renderEntireThree(state)
}