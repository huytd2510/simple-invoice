import invoiceListScreen from '../../support/ui/InvocieList'
import searchBar from '../../support/ui/SearchBar'
import invoiceDetailScreen from '../../support/ui/InvocieDetail'

describe('Invoice Detail', () => {
  it('should visible screen', async function () {
    await invoiceListScreen.toBeVisible()
    await invoiceListScreen.itemItem.atIndex(0).tap()
    await invoiceDetailScreen.toBeVisible()
  })
})
