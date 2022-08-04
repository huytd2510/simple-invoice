import invoiceListScreen from '../../support/ui/InvocieList'
import searchBar from '../../support/ui/SearchBar'
import modalFilter from '../../support/ui/FilterModal'

describe('Invoice List', () => {
  it('should visible screen', async function () {
    await invoiceListScreen.toBeVisible()
  })
  it('should visible icon for search and filter', async function () {
    await searchBar.toBeVisibleAllItem()
  })
  it('should have at least one invoice item', async function () {
    await invoiceListScreen.haveAtLeastOneItem()
  })
})

describe('Invoice List can search item', () => {
  it('should visible icon search ', async function () {
    await searchBar.toBeVisibleIconSearch()
  })
  it('should found item when input id', async function () {
    await searchBar.inputSearchInvoice.replaceText('1221')
    await searchBar.iconSearchInvoice.tap()
    await invoiceListScreen.haveAtLeastOneItem()
  })
  it('should not found item when input wrong id', async function () {
    await searchBar.inputSearchInvoice.replaceText('huy123')
    await searchBar.iconSearchInvoice.tap()
    await invoiceListScreen.toBeEmptyList()
  })
  it('should found item when input empty', async function () {
    await searchBar.inputSearchInvoice.replaceText('')
    await searchBar.iconSearchInvoice.tap()
    await invoiceListScreen.haveAtLeastOneItem()
  })
})

describe('Invoice List can filter item', () => {
  it('should visible icon filter ', async function () {
    await searchBar.inputSearchInvoice.replaceText('')
    await searchBar.toBeVisibleIconFilter()
  })
  it('can open modal filter', async function () {
    await searchBar.iconFilterInvoice.tap()
    await modalFilter.toBeVisible()
    await modalFilter.closeModal.tap()
  })

  it('can filter by status', async function () {
    await searchBar.iconFilterInvoice.tap()
    await modalFilter.filterDataWithStatus()
    await invoiceListScreen.toBeEmptyList()
  })

  it('can filter with default value', async function () {
    await searchBar.iconFilterInvoice.tap()
    await modalFilter.filterDataWithDefault()
    await invoiceListScreen.haveAtLeastOneItem()
  })
})

