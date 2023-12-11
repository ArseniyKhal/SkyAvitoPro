import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090',
  }),
  endpoints: (builder) => ({
    getAllAdvs: builder.query({
      query: () => 'ads',
    }),
  }),
})

export const { useGetAllAdvsQuery } = advApi
