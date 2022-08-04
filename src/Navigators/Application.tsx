import React from 'react'
import { StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import StartupContainer from '@/Screens/MasterScreens/StartupContainer'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import { InvoiceList } from '@/Screens/InvoiceList'
import DropdownAlert from 'react-native-dropdownalert'
import { DropDownHolder } from '@/Utils/DropDownHolder'
import { InvoiceDetail } from '@/Screens/InvoiceDetail'
import { CreateInvoice } from '@/Screens/CreateInvoice'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <View style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Main"
            component={InvoiceList}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="InvoiceDetail"
            component={InvoiceDetail}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="CreateInvoice"
            component={CreateInvoice}
            options={{
              animationEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
        <DropdownAlert
            ref={ref => DropDownHolder.setDropDown(ref)}
            messageStyle={{ color: 'white' }}
            closeInterval={1000}
        />
    </View>
  )
}

export default ApplicationNavigator
