import { configureStore } from '@reduxjs/toolkit'
import { advApi } from 'services/servicesApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [advApi.reducerPath]: advApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advApi.middleware),
})

setupListeners(store.dispatch)
