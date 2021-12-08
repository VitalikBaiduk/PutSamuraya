import React, {useState} from 'react';
import axios from "axios";
import {Friends} from "./Friends";

// export const FriendsAPIComponent = (props: FriendsAPIComponentType) => {
//
//     const getUsers = () => {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
//             .then((response) => {
//                 props.setUsers(response.data.items)
//                 console.log(response.data.totalUsersCount)
//             })
//
//     }
//     let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pages: Array<number> = []
//
//     for (let i = 1; i <= pageCount; i++) {
//         pages.push(i)
//     }
//
//     let setPage = (el: number) => {
//         props.setCurrentPage(el)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${props.pageSize}`)
//             .then((response) => {
//                 props.setUsers(response.data.items)
//             })
//     }
//     return (
//         <Friends
//             currentPage={props.currentPage}
//             friends={props.friends}
//             unFollow={props.unFollow}
//             follow={props.follow}
//             getUsers={getUsers}
//             pages={pages}
//             setPage={setPage}
//         />
//     )
// }