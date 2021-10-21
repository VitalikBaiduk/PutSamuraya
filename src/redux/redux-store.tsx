import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {friendsReducer} from "./friendsReducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    friendsReducer:friendsReducer
})

export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers);