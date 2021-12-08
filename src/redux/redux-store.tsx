import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {friendsReducer} from "./friendsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware  from "redux-thunk"

let rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    friendsReducer: friendsReducer,
    autnReducer: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
