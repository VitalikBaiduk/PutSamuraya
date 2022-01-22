import React from 'react';
import {
    addPostActionCreator,
    ArrPostsType,
    changeInputValueActionCreator,
    profileReducer,
    ProfileType
} from "./profileReducer";


test("length of input value should be incremented",() =>{
    let action = changeInputValueActionCreator("Hi")
    let state = {
        profile: {} as ProfileType,
        posts: [] as Array<ArrPostsType>,
        newInputValue: "",
        status: "",
    }

    let newState = profileReducer(state,action)
    expect(newState.newInputValue.length).toBe(2)

})