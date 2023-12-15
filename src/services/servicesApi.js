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

    // авторизовать пользователя
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'post',
          body,
        }
      },
    }),
    // регистрация пользователя
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: 'auth/register',
          method: 'post',
          body,
        }
      },
    }),
  }),
})

export const {
  useGetAllAdvsQuery,
  useGetAllCommentsAdQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = advApi
