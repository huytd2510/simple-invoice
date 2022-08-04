import { AnyAction, AsyncThunk } from '@reduxjs/toolkit'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>

const ignoreTypes: string[] = []
export function isPendingAction(action: AnyAction): action is PendingAction {
  let willIgnore = false
  for (let i of ignoreTypes) {
    if (action.type.includes(i)) {
      willIgnore = true
      break
    }
  }
  return action.type.endsWith('/pending') && !willIgnore
}
export function isFinishAction(
  action: AnyAction,
): action is FulfilledAction | RejectedAction {
  return action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')
}
