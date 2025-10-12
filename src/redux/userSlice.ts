import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '../types'

export interface UserState {
  user: IUser | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser} = userSlice.actions

export default userSlice.reducer