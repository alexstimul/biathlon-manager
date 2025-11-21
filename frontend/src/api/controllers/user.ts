import type { User } from "../../models/user"
import { queryApi } from "../api"

export const userApi = queryApi.injectEndpoints({
    endpoints: build => ({
        authUser: build.mutation<User, string>({
            query: email => ({
                url: "user/auth",
                method: "POST", 
                body: { email }
            })
        })
    })
});

export const { useAuthUserMutation } = userApi
