import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_API = 'TOKEN_API'
export const PROFILE_ID = 'PROFILE_ID'

export let apiToken = ''
export let profileId = ''

export const saveApiToken = (token: string) => {
  apiToken = token
  AsyncStorage.setItem(TOKEN_API, token)
}

export const saveUserId = (id: string) => {
  profileId = id
  AsyncStorage.setItem(PROFILE_ID, id)
}

export const updateApiTokenWithoutSave = (token: string) => {
  apiToken = token
}

export const logoutRemove = async () => {
  apiToken = ''
  profileId = ''
  await AsyncStorage.removeItem(TOKEN_API)
  await AsyncStorage.removeItem(PROFILE_ID)
}

export const isSignedIn = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(TOKEN_API)
      .then(async res => {
        if (res !== null) {
          apiToken = res
          let profileIdRes = await AsyncStorage.getItem(PROFILE_ID)
          if (profileIdRes) {
            profileId = profileIdRes
          }
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(err => reject(err))
  })
