import { createAsyncThunk } from '@reduxjs/toolkit'
import { TYPES_ACTION } from '@/Thunk/Types'
import { profileApi } from '@/Services/Api/Modules/Profile'

export const fetchProfileAction = createAsyncThunk(
  TYPES_ACTION['PROFILE/FETCH_PROFILE'],
  async (_: object, thunkAPI) => {
    return await profileApi.fetchProfile()
  },
)
