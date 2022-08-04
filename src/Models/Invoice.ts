export interface StatusInvoice {
  key: string
  value: boolean
}
export interface Customer {
  id: string
  addresses: string[]
}

export interface Merchant {
  id: string
}

export interface Paging {
  pageNumber: number
  pageSize: number
  totalRecords: number
}

export abstract class ResponseInvoice {
  paging: Paging
  data: Invoice[]
  constructor(props: any) {
    this.paging = props.paging
    this.data = props.data
  }
}

export class Invoice {
  invoiceId: string
  invoiceNumber: string
  type: string
  invoiceDate: string
  createdAt: string
  dueDate: string
  status: StatusInvoice[]
  subStatus: [] //todo . Not clear data
  numberOfDocuments: number
  totalTax: number
  totalAmount: number
  balanceAmount: number
  description: string
  totalPaid: number
  invoiceSubTotal: number
  customFields: StatusInvoice[] //todo
  totalDiscount: number
  extensions: [] //todo . Not clear data
  version: string
  customer: Customer // todo
  merchant: Merchant //todo
  purchaseOrderMatched: boolean
  isRegulated: boolean
  isInsured: boolean
  constructor(props: any) {
    this.invoiceId = props.invoiceId
    this.invoiceNumber = props.invoiceNumber
    this.type = props.type
    this.invoiceDate = props.invoiceDate
    this.createdAt = props.createdAt
    this.dueDate = props.dueDate
    this.status = props.status
    this.subStatus = props.subStatus
    this.numberOfDocuments = props.numberOfDocuments
    this.totalTax = props.totalTax
    this.totalAmount = props.totalAmount
    this.balanceAmount = props.balanceAmount
    this.description = props.description
    this.totalPaid = props.totalPaid
    this.invoiceSubTotal = props.invoiceSubTotal
    this.customFields = props.customFields
    this.totalDiscount = props.totalDiscount
    this.extensions = props.extensions
    this.version = props.version
    this.customer = props.customer
    this.merchant = props.merchant
    this.purchaseOrderMatched = props.purchaseOrderMatched
    this.isRegulated = props.isRegulated
    this.isInsured = props.isInsured
  }
}

export class IFetchInvoicesParams {
  fromDate?: string
  toDate?: string
  pageSize?: number = 20
  pageNum?: number = 1
  ordering?: 'ASCENDING' | 'DESCENDING' | string = 'ASCENDING'
  sortBy?: 'CREATED_DATE' | string = 'CREATED_DATE'
  status?: 'Paid' | string
  keyword?: string
  dateType?: string = 'INVOICE_DATE'
}

export const convertIFetchInvoicesParams = (params: IFetchInvoicesParams) => {
  const data: IFetchInvoicesParams = { ...params }

  if (params.fromDate) {
    data.fromDate = params.fromDate
  }
  if (params.toDate) {
    data.toDate = params.toDate
  }
  if (params.keyword) {
    data.keyword = params.keyword
  }
  if (params.status) {
    data.keyword = params.status
  }
  return data
}
