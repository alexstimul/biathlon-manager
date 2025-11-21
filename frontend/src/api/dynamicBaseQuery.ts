import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface DynamicBaseQueryArgs extends FetchArgs {
    baseUrl?: string
}

const dynamicBaseQuery: BaseQueryFn<DynamicBaseQueryArgs, unknown, FetchBaseQueryError> = async (
    { baseUrl = "http://localhost:5577/api", timeout = 25000, ...rest },
    api,
    extraOptions
) => {
    const baseQuery = fetchBaseQuery({ baseUrl, timeout })
    return baseQuery(rest, api, extraOptions)
}

export default dynamicBaseQuery
