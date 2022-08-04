import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'

import theme from './Theme'
import authReducer from '../Reducers/Auth'
import appStateReducer from '../Reducers/AppState'
import profileReducer from '../Reducers/Profile'
import invoiceReducer from '../Reducers/Invoice'

const reducers = combineReducers({
  theme,
  appStateReducer,
  authReducer,
  profileReducer,
  invoiceReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    })

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof reducers>

export { store, persistor }