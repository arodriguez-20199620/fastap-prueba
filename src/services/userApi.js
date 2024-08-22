import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuey";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: '/user/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/user/login',
                method: 'POST',
                body: data,
            })
        })
    })
})

export const {
    useCreateUserMutation,
    useLoginMutation
} = userApi

