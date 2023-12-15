import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  access: null,
  refresh: null,
}

const userSlice = createSlice({
  name: 'user',
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

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
