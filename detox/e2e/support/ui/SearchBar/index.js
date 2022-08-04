// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class SearchBar {
  testID = {
    iconAddInvoice: 'searchBar.icon.addInvoice',
    inputSearchInvoice: 'searchBar.input.search',
    iconSearchInvoice: 'searchBar.icon.search',
    iconFilterInvoice: 'searchBar.icon.filter',
  }

  iconAddInvoice = element(by.id(this.testID.iconAddInvoice))
  inputSearchInvoice = element(by.id(this.testID.inputSearchInvoice))
  iconSearchInvoice = element(by.id(this.testID.iconSearchInvoice))
  iconFilterInvoice = element(by.id(this.testID.iconFilterInvoice))


  toBeVisibleAllItem = async () => {
    await this.toBeVisibleIconAdd()
      await  this.toBeVisibleInputSearch()
      await  this.toBeVisibleIconSearch()
      await  this.toBeVisibleIconFilter()
  }

  toBeVisibleIconAdd = async () => {
    await expect(this.iconAddInvoice).toBeVisible()
  }
  toBeVisibleInputSearch = async () => {
    await expect(this.inputSearchInvoice).toBeVisible()
  }
  toBeVisibleIconSearch = async () => {
    await expect(this.iconSearchInvoice).toBeVisible()
  }
  toBeVisibleIconFilter = async () => {
    await expect(this.iconFilterInvoice).toBeVisible()
  }
}

const searchBar = new SearchBar()
export default searchBar
