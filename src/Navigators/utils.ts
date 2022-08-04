/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
    CommonActions,
    createNavigationContainerRef, StackActions,
} from '@react-navigation/native'
import {CreateInvoice} from "@/Screens/CreateInvoice";

type RootStackParamList = {
  Startup: undefined
  Home: undefined
  InvoiceDetail: undefined
  CreateInvoice: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function push(name: string, params: any) {
    navigationRef.current?.dispatch(StackActions.push(name, params))
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    )
  }
}

export function goBack() {
  if(navigationRef.isReady())
  {
    navigationRef.goBack()
  }
}
