// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import { getMatchesLength } from '../../device'

class InvoiceListScreen {
  testID = {
    invoiceListScreen: 'invoiceList.screen',
    itemItem: 'invoiceItem.button.item',
    emptyList: 'listInvoice.empty'
  }

  invoiceListScreen = element(by.id(this.testID.invoiceListScreen))
  itemItem = element(by.id(this.testID.itemItem))
  emptyList = element(by.id(this.testID.emptyList))

  toBeVisible = async () => {
    await expect(this.invoiceListScreen).toBeVisible()
  }

  haveAtLeastOneItem = async () => {
    await expect(this.itemItem.atIndex(0)).toBeVisible()
  }

  toBeEmptyList = async () => {
    await expect(this.emptyList).toBeVisible()
  }
}

const invoiceListScreen = new InvoiceListScreen()
export default invoiceListScreen
