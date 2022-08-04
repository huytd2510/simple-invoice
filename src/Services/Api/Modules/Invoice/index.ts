import { CREATE_INVOICE, GET_INVOICE } from '@/Services/Api/Const'
import { Api, PostContentType } from '@/Services/Api/api'
import { DropDownHolder } from '@/Utils/DropDownHolder'
import { IFetchInvoicesParams, Invoice } from '@/Models/Invoice'
import { CreateInvoiceRequest, InvoiceRequest } from '@/Models/InvoiceRequest'

export const invoiceApi = {
  fetchInvoice: (params: IFetchInvoicesParams) => {
    return new Promise(async (resolve, reject) => {
      const res = await Api.GET(GET_INVOICE, params)
      if (Api.isOk(res) && res?.data) {
        resolve(res?.data)
      } else {
        reject('fetchProfile failed!')
        DropDownHolder.alertError('Something went wrong.')
      }
    })
  },
  createInvoice: (params: CreateInvoiceRequest) => {
    return new Promise(async (resolve, reject) => {
      const res = await Api.POST(CREATE_INVOICE, params, PostContentType.JSON, {
        'Operation-Mode': 'SYNC',
      })
      if (Api.isOk(res) && res?.data?.data) {
        DropDownHolder.alertSuccess('Create invoice success')
        resolve(res?.data)
      } else {
        reject('createInvoice failed!')
        DropDownHolder.alertError('Something went wrong.')
      }
    })
  },
}
