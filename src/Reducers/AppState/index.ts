import { createSlice } from '@reduxjs/toolkit'

import { isFinishAction, isPendingAction } from '@/Store/Utils'

export interface IAppState {
  isLoading: boolean
}

const initialState: IAppState = {
  isLoading: false,
}

const appState = createSlice({
  name: 'AppState',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isPendingAction, (state, action) => {
      state.isLoading = true
    })
    builder.addMatcher(isFinishAction, (state, action) => {
      state.isLoading = false
    })
  },
})

export default appState.reducer
