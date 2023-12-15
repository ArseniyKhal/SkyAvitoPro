import { configureStore } from '@reduxjs/toolkit'
import { advApi } from 'services/servicesApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReduser from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReduser,
    [advApi.reducerPath]: advApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advApi.middleware),
})

setupListeners(store.dispatch)
