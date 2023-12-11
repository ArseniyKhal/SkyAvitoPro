import { configureStore } from '@reduxjs/toolkit'
// import userReduser from './slices/userSlice'
import { advApi } from 'services/servicesApi'

export const store = configureStore({
  reducer: {
    [advApi.reducerPath]: advApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advApi.middleware),
})
