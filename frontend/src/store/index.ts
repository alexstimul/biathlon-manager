import { configureStore } from "@reduxjs/toolkit"
import { UserReducer } from "./user/slice"
import { queryApi } from "../api/api"

const middlewares = [queryApi.middleware]

export const store = configureStore({
    reducer: {
        [queryApi.reducerPath]: queryApi.reducer,
        user: UserReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
