import type { User } from "../../models/user"
import { queryApi } from "../api"

export const userApi = queryApi.injectEndpoints({
    endpoints: build => ({
        authUser: build.mutation<User, { login: string }>({
            query: (credentials) => ({
                url: "user/auth",
                method: "POST", 
                body: credentials
            })
        })
    })
});

export const { 
    useAuthUserMutation
} = userApi
