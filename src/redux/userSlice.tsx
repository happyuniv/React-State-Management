import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { UserDataType } from '../App'

// Define the initial state using that type
const initialState: UserDataType = {
  user: null,
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.user = null
      state.loading = true
    },
    registerUserEnd: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
  },
})

export const { registerUserStart, registerUserEnd } = userSlice.actions

export default userSlice.reducer
