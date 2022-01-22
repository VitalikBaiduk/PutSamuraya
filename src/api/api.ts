import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "aeec78c5-f12a-4955-8028-1c25859a2892"
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`,)
            .then((response) => {
                return response.data
            })
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`, {},)
            .then((response) => {
                return response.data
            })
    },
    setUser(userId: any) {
        return profileApi.getUser(userId)
    }
}
//{status: 123}
export let profileApi = {
    getUser(userId: any) {
        return instance.get(`profile/` + userId)
            .then((response) => {
                return response
            })
    },
    getStatus(userId: any) {
        return instance.get("profile/status/" + userId)
            .then(response => {
                return response
            })
    },
    updateStatus(status: string) {
        return instance.put('profile/status',)
    }
}

export const authApi = {
    me() {
        return instance.get("auth/me")
            .then((response) => {
                return response
            })
    }
}