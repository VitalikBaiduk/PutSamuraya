import {
    addPostActionCreator, ArrPostsType,
    changeInputValueActionCreator,
} from "../../../redux/profileReducer";
import React, {ChangeEvent} from "react";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../redux/redux-store";

// export type PostContainerType = {
//     store: Store<EmptyObject &
//         {
//             profileReducer: profileReducerStateType,
//             dialogsReducer: dialogsReducerType,
//             friendsReducer: friendsReducerStateType
//         }>
// }
// export const PostContainer = () => {
//
//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {(store) => {
//                     let state = store.getState()
//                     const addPosts = () => {
//                         if (store.getState().profileReducer.newInputValue) {
//                             store.dispatch(addPostActionCreator())
//                         }
//                     }
//                     const onChange = (text: ChangeEvent<HTMLInputElement>) => {
//                         store.dispatch(changeInputValueActionCreator(text.currentTarget.value))
//                     }
//                     return <Posts
//                         addPosts={addPosts}
//                         onChange={onChange}
//                         newInputValue={state.profileReducer.newInputValue}
//                         posts={state.profileReducer.posts}/>
//                 }
//                 }
//
//             </StoreContext.Consumer>
//         </div>
//     )
// }

type mapStateToPropsType = {
    newInputValue: string
    posts: Array<ArrPostsType>,
}
type mapDispatchToProps = {
    addPosts: () => void
    onChange: (text: ChangeEvent<HTMLInputElement>) => void
}
export type PropsType = mapStateToPropsType & mapDispatchToProps
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newInputValue: state.profileReducer.newInputValue,
        posts: state.profileReducer.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPosts: () => {
            let state = store.getState()
            if (state.profileReducer.newInputValue) {
                dispatch(addPostActionCreator())
            }
        },
        onChange: (text: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeInputValueActionCreator(text.currentTarget.value))
        }
    }
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)