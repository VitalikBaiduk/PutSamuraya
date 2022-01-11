import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {friendsReducer} from "./friendsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {formReducer} from "./formReducer";
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    friendsReducer: friendsReducer,
    authReducer: authReducer,
    form: formReducer,
    appReducer:appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
