import { createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '@/Services/Api/Modules/Auth'
import { TYPES_ACTION } from '@/Thunk/Types'

export const loginParams = {
  username: 'dung+octopus4@101digital.io',
  password: 'Abc@123456',
  client_id: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
  client_secret: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
  grant_type: 'password',
  scope: 'openid',
}

export const loginAction = createAsyncThunk(
  TYPES_ACTION['AUTH/LOGIN_REQUEST'],
  async (_: object, thunkAPI) => {
    return await authApi.login(loginParams)
  },
)
