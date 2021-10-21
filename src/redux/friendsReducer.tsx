import {ActionType, ArrOfPeopleType} from "./state";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";

export type friendsReducerStateType = {
    friends: Array<ArrOfPeopleType>
}

let initialState = {
    friends: [
        {id: 1, name: "Andrew Garfield", img: img1},
        {id: 2, name: "Robin Williams", img: img2},
        {id: 3, name: "Kate Winslet", img: img3},
        {id: 4, name: "Elise Eberle", img: img4},
        {id: 5, name: "Marta Dusseldorp", img: img5},
        {id: 6, name: "Brock Lesnar", img: img6}
    ]
}

export const friendsReducer = (state: friendsReducerStateType = initialState, action: ActionType): friendsReducerStateType => {
    switch (action.type) {
        case "ARR-PEOPLE":
            return state
    }
    return state
}

export type friendsReducerActionCreatorType = ReturnType<typeof friendsReducerActionCreator>
export const friendsReducerActionCreator = () => {
    return {
        type: "ARR-PEOPLE"
    } as const
}