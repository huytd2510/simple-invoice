import { Alert, Linking, Platform } from 'react-native'

export const callNumber = (phone: string) => {
  let phoneNumber = phone
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`
  } else {
    phoneNumber = `tel:${phone}`
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available')
      } else {
        return Linking.openURL(phoneNumber)
      }
    })
    .catch(err => console.log(err))
}

export const openBrowser = (url: string) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url)
    } else {
      console.log("Don't know how to open URI: " + url)
    }
  })
}

export function randomString(length = 8) {
  let result = ''
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
