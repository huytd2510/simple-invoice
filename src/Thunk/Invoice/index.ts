import { createAsyncThunk } from '@reduxjs/toolkit'
import { TYPES_ACTION } from '@/Thunk/Types'
import { invoiceApi } from '@/Services/Api/Modules/Invoice'
import {
  convertIFetchInvoicesParams,
  IFetchInvoicesParams,
} from '@/Models/Invoice'
import {convertToArrayCreateInvoice, InvoiceRequest} from '@/Models/InvoiceRequest'

export const fetchInvoices = createAsyncThunk(
  TYPES_ACTION['INVOICE/FETCH_INVOICE'],
  async (params: IFetchInvoicesParams, thunkAPI) => {
    console.log('pa', params)
    return await invoiceApi.fetchInvoice(convertIFetchInvoicesParams(params))
  },
)

export const createInvoice = createAsyncThunk(
  TYPES_ACTION['INVOICE/CREATE_INVOICE'],
  async (params: InvoiceRequest, thunkAPI) => {
    return await invoiceApi.createInvoice(convertToArrayCreateInvoice(params))
  },
)
