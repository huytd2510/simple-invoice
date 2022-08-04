import { createSlice } from '@reduxjs/toolkit'
import Auth from '@/Models/Auth'
import { loginAction } from '@/Thunk/Auth/AuthThunk'
import { saveApiToken } from '@/Utils/Storage'

export interface IAuthReducer {
  auth: Auth | null
  isLogin: boolean
}

const initialState: IAuthReducer = {
  auth: null,
  isLogin: false,
}

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      const data = action.payload as Auth
      saveApiToken(data.accessToken ?? '')
      state.auth = data
      state.isLogin = true
    })
  },
})

export default authSlice.reducer
