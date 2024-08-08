import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://digitalmoney.digitalhouse.com/api',
  prepareHeaders: (headers) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token')

    if (token) {
      headers.set('Authorization', `${token}`)
    }
    return headers
  }
})

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
    updateUser: builder.mutation({
      query: ({ userId, ...data }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: data
      })
    }),
    getAccount: builder.query({
      query: () => `/account`,
    }),
    getActivity: builder.query({
      query: (accountId) => `/accounts/${accountId}/activity`,
    }),
    getCards: builder.query({
      query: (accountId) => `/accounts/${accountId}/cards`,
    }),
    getTransaction: builder.query({
      query: ({ account, id }) => `/accounts/${account}/transactions/${id}`,
    }),
  })
})

export const { useGetUserQuery, useUpdateUserMutation, useGetAccountQuery, useGetActivityQuery, useGetCardsQuery, useGetTransactionQuery } = userApi