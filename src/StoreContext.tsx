import React from "react";
// import {ActionType, StoreType} from "./redux/state";
import {EmptyObject, Store} from "redux";
import {friendsReducerStateType} from "./redux/friendsReducer";
import {store} from "./redux/redux-store";


// export const StoreContext = React.createContext({} as Store<EmptyObject & { profileReducer: profileReducerStateType; dialogsReducer: dialogsReducerType; friendsReducer: friendsReducerStateType; }>)
// export type ProviderType = {
//     store: Store<EmptyObject & { profileReducer: profileReducerStateType, dialogsReducer: dialogsReducerType, friendsReducer: friendsReducerStateType }>
//     children: any
// }
// export const Provider = ({store, children, ...props}: ProviderType) => {
//     return (
//         <StoreContext.Provider value={store}>
//             {children}
//         </StoreContext.Provider>
//     )
// }
