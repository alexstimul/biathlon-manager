import { createApi } from "@reduxjs/toolkit/query"
import dynamicBaseQuery from "./dynamicBaseQuery"
import { tags } from "./tags"

export const instanceConfig = {
    baseURL: `http://localhost:5577/api`,
    timeout: 25000
}

export const queryApiReducerPath = "queryApi" as const
export const queryApi = createApi({
    baseQuery: dynamicBaseQuery,
    reducerPath: queryApiReducerPath,
    tagTypes: tags,
    endpoints: () => ({})
})
