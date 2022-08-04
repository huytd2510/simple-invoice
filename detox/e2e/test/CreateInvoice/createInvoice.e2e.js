import invoiceListScreen from '../../support/ui/InvocieList'
import searchBar from '../../support/ui/SearchBar'
import createInvoiceScreen from '../../support/ui/CreateInvoice'

describe('Create Invoice', () => {
  it('should visible screen', async function () {
    await searchBar.iconAddInvoice.tap()
    await createInvoiceScreen.toBeVisible()
  })
  it('should create new invoice with random value', async function () {
    const invoiceNumber = await createInvoiceScreen.inputData()
    await createInvoiceScreen.buttonCreateInvoice.tap()
    await searchBar.inputSearchInvoice.replaceText(invoiceNumber)
    await searchBar.iconSearchInvoice.tap()
    await invoiceListScreen.haveAtLeastOneItem()
  })
})
