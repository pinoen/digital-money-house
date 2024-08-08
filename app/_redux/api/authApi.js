import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://digitalmoney.digitalhouse.com/api' }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const { useLoginMutation } = authApi