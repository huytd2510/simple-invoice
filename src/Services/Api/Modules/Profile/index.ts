import { GET_PROFILE } from '@/Services/Api/Const'
import { Api } from '@/Services/Api/api'
import { DropDownHolder } from '@/Utils/DropDownHolder'
import Profile from '@/Models/Profile'

export const profileApi = {
  fetchProfile: () => {
    return new Promise(async (resolve, reject) => {
      const res = await Api.GET(GET_PROFILE)
      if (Api.isOk(res) && res.data) {
        resolve(new Profile(res.data.data))
      } else {
        reject('fetchProfile failed!')
        DropDownHolder.alertError('Có lỗi xảy ra')
      }
    })
  },
}
