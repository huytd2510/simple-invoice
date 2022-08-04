import { createSlice } from '@reduxjs/toolkit'
import { Invoice, ResponseInvoice } from '@/Models/Invoice'
import { createInvoice, fetchInvoices } from '@/Thunk/Invoice'

export interface EducationProgramReducer {
  responseInvoice: ResponseInvoice | null
  createInvoiceSuccess: boolean
}

const initialState: EducationProgramReducer = {
  responseInvoice: null,
  createInvoiceSuccess: false,
}

const invoiceSlice = createSlice({
  name: 'Invoice',
  initialState,
  reducers: {
    clearData: state => {
      state.createInvoiceSuccess = false
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      const responseData = action.payload as ResponseInvoice
      const result = responseData.data.map((item: any) => new Invoice(item))
      const isFirstPage = responseData.paging.pageNumber === 1
      if (!isFirstPage) {
        let invoices: Invoice[] = state.responseInvoice?.data || []
        invoices = [...invoices, ...result]
        responseData.data = invoices
      }
      state.responseInvoice = responseData
    })
    builder.addCase(createInvoice.fulfilled, (state, action) => {
      // @ts-ignore
      const responseData = action.payload.data as Invoice
      const currentInvoice = [
        ...(state.responseInvoice?.data ?? []),
        responseData,
      ]
      if (state.responseInvoice) {
        state.responseInvoice.data = currentInvoice
      }
      state.createInvoiceSuccess = true
    })
    builder.addCase(createInvoice.pending, (state, action) => {
      state.createInvoiceSuccess = false
    })
  },
})

export const { clearData } = invoiceSlice.actions

export default invoiceSlice.reducer
