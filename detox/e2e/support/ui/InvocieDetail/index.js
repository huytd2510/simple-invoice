// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import { getMatchesLength } from '../../device'

class InvoiceDetailScreen {
  testID = {
    invoiceDetailScreen: 'invoiceDetail.screen',
  }

  invoiceDetailScreen = element(by.id(this.testID.invoiceDetailScreen))

  toBeVisible = async () => {
    await expect(this.invoiceDetailScreen).toBeVisible()
  }
}

const invoiceDetailScreen = new InvoiceDetailScreen()
export default invoiceDetailScreen
