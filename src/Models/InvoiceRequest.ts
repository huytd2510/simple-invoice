import { randomString } from '@/Utils/Function'
import dayjs from 'dayjs'

export class InvoiceRequest {
  invoiceReference: string
  invoiceNumber: string
  currency: string
  invoiceDate: string
  dueDate: string
  description: string
  items: [any]

  constructor(props: any) {
    this.invoiceReference = props.invoiceReference
    this.invoiceNumber = props.invoiceNumber
    this.dueDate = props.dueDate
    this.description = props.description
    this.invoiceDate = dayjs().format('YYYY-MM-DD')
    this.currency = 'GBP'
    this.items = [
      {
        itemReference: randomString(3),
        description: randomString(),
        quantity: Math.floor(Math.random() * 1000),
        rate: Math.floor(Math.random() * 100),
        itemUOM: randomString(2),
        itemName: randomString(),
      },
    ]
  }
}

export interface CreateInvoiceRequest {
  listOfInvoices: InvoiceRequest[]
}

export function convertToArrayCreateInvoice(
  data: InvoiceRequest,
): CreateInvoiceRequest {
  return {
    listOfInvoices: [data],
  }
}
