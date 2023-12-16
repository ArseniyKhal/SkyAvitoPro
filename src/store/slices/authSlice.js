import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  access: null,
  refresh: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.access = action.payload.access
      state.refresh = action.payload.refresh
    },

    removeUser(state) {
      state.email = null
      state.access = null
      state.refresh = null
    },
  },
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
