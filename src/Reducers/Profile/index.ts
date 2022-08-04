import { createSlice } from '@reduxjs/toolkit'
import Profile from '@/Models/Profile'
import { fetchProfileAction } from '@/Thunk/Profile'

export interface IProfileReducer {
  profile: Profile | null
}

const initialState: IProfileReducer = {
  profile: null,
}

const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload as Profile
    })
  },
})

export default profileSlice.reducer
