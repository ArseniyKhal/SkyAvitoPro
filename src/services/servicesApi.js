import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser, removeUser } from 'store/slices/authSlice'
import { saveUserInfoInLocalStorage } from 'helpers/helpers'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8090',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status !== 401) {
    return result
  }

  // Функция которая отчищает данные о юзере в сторе и отправляет на страницу логина
  const forceLogout = () => {
    api.dispatch(removeUser())
    window.location.href = '/auth'
  }

  const { auth } = api.getState()
  // Если в сторе нет refresh токена, разлогиниваем его и отправляем авторизоваться руками
  if (!auth.refresh) {
    return forceLogout()
  }

  // Делаем запрос за новым access токеном в API обновления токена
  //   console.log('Делаем запрос за новым access токеном')
  const refreshResult = await baseQuery(
    {
      url: '/auth/login',
      method: 'put',
      body: {
        access_token: auth.access,
        refresh_token: auth.refresh,
      },
    },
    api,
    extraOptions,
  )

  // Если api обновления токена не вернуло новый access токен, то разлогиниваем юзера
  if (!refreshResult.data.access_token) {
    return forceLogout()
  }
  // получили новый access токен, сохраняем его в стор и сторож
  saveUserInfoInLocalStorage(refreshResult, auth.email)
  api.dispatch(
    setUser({
      ...auth,
      access: refreshResult.data.access_token,
      refresh: refreshResult.data.refresh_token,
    }),
  )
  // Делаем повторный запрос с теми же параметрами что и исходный
  //   console.log('Делаем повторный запрос с новым access токеном')
  const retryResult = await baseQuery(args, api, extraOptions)

  // Если повторный запрос выполнился с 401 кодом, то что-то совсем пошло не так,
  // отправляем на принудительную ручную авторизацию
  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }
  return retryResult
}

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // Получить все объявления
    getAllAdvs: builder.query({
      query: () => 'ads',
    }),

    // Получить все комментарии по объявлению
    getAllCommentsAd: builder.query({
      query: (id) => `ads/${id}/comments`,
    }),

    // получить все объявления текущего пользователя
    getMyAdvs: builder.query({
      query: () => 'ads/me',
    }),

    // авторизовать пользователя
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body,
          headers: {
            'content-type': 'application/json',
          },
        }
      },
    }),

    // регистрация пользователя
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: 'auth/register',
          method: 'POST',
          body,
        }
      },
    }),
    // получить текущего пользователя
    getUser: builder.query({
      query: () => 'user',
      providesTags: () => ['User'],
    }),

    // изменить запись текущего пользователя
    patchUser: builder.mutation({
      query: (body) => {
        for (const propName in body) {
          if (body[propName] === '') {
            delete body[propName]
          }
        }
        return {
          url: 'user',
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['User'],
    }),
    // загрузить аватар пользователя
    uploadUserAvatar: builder.mutation({
      query: (body) => {
        return {
          url: 'user/avatar',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetAllAdvsQuery,
  useGetAllCommentsAdQuery,
  useGetMyAdvsQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUserQuery,
  usePatchUserMutation,
  useUploadUserAvatarMutation,
} = advApi
