import {AppStateType} from "./redux-store";

export const getRequestUsers = (state: AppStateType) => {
    return state.friendsReducer.friends
}
export const getPageSize = (state: AppStateType) => {
    return state.friendsReducer.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.friendsReducer.totalUsersCount
}
export const getСurrentPage = (state: AppStateType) => {
    return  state.friendsReducer.currentPage
}
export const isFetching = (state: AppStateType) => {
    return   state.friendsReducer.isFetching
}
export const followingInProgress = (state: AppStateType) => {
    return   state.friendsReducer.followingInProgress
}
