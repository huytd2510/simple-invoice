// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


import { randomString } from '../../functions'

class CreateInvoiceScreen {
  testID = {
    createInvoiceScreen: 'createInvoice.screen',
    inputInvoiceNumber: 'createInvoice.input.invoiceNumber',
    inputInvoiceRef: 'createInvoice.input.invoiceRef',
    inputInvoiceDes: 'createInvoice.input.description',
    datePicker: 'datePicker.button',
    buttonCreateInvoice: 'createInvoice.button'
  }

  createInvoiceScreen = element(by.id(this.testID.createInvoiceScreen))
  inputInvoiceNumber = element(by.id(this.testID.inputInvoiceNumber))
  inputInvoiceRef = element(by.id(this.testID.inputInvoiceRef))
  inputInvoiceDes = element(by.id(this.testID.inputInvoiceDes))
  datePicker = element(by.id(this.testID.datePicker))
  buttonCreateInvoice = element(by.id(this.testID.buttonCreateInvoice))

  toBeVisible = async () => {
    await expect(this.createInvoiceScreen).toBeVisible()
  }

  inputData = async () => {
    const invoiceNumber = randomString(3)
    await this.inputInvoiceNumber.replaceText(invoiceNumber)
    await this.inputInvoiceRef.replaceText(randomString(3))
    await this.inputInvoiceDes.replaceText(randomString(3))
    await this.selectDate()
    return invoiceNumber
  }

  selectDate = async () => {
    await this.datePicker.tap()
    await element(by.text('Confirm')).tap()
  }
}

const createInvoiceScreen = new CreateInvoiceScreen()
export default createInvoiceScreen
