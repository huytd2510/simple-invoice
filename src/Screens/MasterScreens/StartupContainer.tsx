import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

import { loginAction } from '@/Thunk/Auth/AuthThunk'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Store'
import { fetchProfileAction } from '@/Thunk/Profile'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const dispatch = useDispatch()
  const isLogin = useSelector((state: RootState) => {
    return state.authReducer.isLogin
  })

  const { t } = useTranslation()

  const init = async () => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true)
    //   }, 2000),
    // )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    dispatch(loginAction({}))
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    console.log("navigateAndSimpleReset('Main')", isLogin)
    if (isLogin) {
      dispatch(fetchProfileAction({}))
      navigateAndSimpleReset('Main')
    }
  }, [isLogin])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default StartupContainer
