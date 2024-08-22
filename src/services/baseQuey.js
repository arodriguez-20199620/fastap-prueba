import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:2657/',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        return headers;
    },
});

export default baseQuery;