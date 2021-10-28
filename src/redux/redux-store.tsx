import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {friendsReducer} from "./friendsReducer";

let rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    friendsReducer:friendsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer);
