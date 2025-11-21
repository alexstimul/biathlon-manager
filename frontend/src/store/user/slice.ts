import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../models/user"

export interface UserState {
    user: User | undefined
}

const initialState: UserState = {
    user: undefined
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | undefined>) {
            state.user = action.payload
        }
    }
})

export const UserReducer = user.reducer
export const actions = user.actions
