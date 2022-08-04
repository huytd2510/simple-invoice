import {Api, PostContentType} from '../../api'
import {LOGIN} from '@/Services/Api/Const'
import {DropDownHolder} from '@/Utils/DropDownHolder'
import Auth from '@/Models/Auth'

export const authApi = {
  login: (params: object) => {
    return new Promise(async (resolve, reject) => {
      const res = await Api.POST(LOGIN, params, PostContentType.FORM_URLENCODED)
      if (Api.isOk(res) && res.data) {
        const auth = new Auth(res.data)
        DropDownHolder.alertSuccess('Logined')
        resolve(auth)
      } else {
        reject('Login fail')
        DropDownHolder.alertError('Please check your account or password')
      }
    })
  },
}
