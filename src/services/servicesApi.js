import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090',
  }),
  endpoints: (builder) => ({
    // Получить все объявления
    getAllAdvs: builder.query({
      query: () => 'ads',
    }),

    // Получить все комментарии по объявлению
    getAllCommentsAd: builder.query({
      query: (id) => `ads/${id}/comments`,
    }),
  }),
})

export const { useGetAllAdvsQuery, useGetAllCommentsAdQuery } = advApi
