import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'feef0a07-2ef5-4686-aa68-187bd79c8c04'
    }
})
export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    }
}