// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import { randomString } from '../../functions'

class ModalFilter {
  testID = {
    modalFilter: 'modal_filter',
    closeModal: 'close_modal',
    iconSortBy: 'modal.category.sortBy',
    iconStatus: 'modal.category.status',
    iconOrdering: 'modal.category.ordering',
    datePickerForm: 'modal.datepicker.formDate',
    datePickerTo: 'modal.datepicker.toDate',
    applyButton: 'modal.button.apply',
  }

  modalFilter = element(by.id(this.testID.modalFilter))
  closeModal = element(by.id(this.testID.closeModal))
  iconSortBy = element(by.id(this.testID.iconSortBy))
  iconStatus = element(by.id(this.testID.iconStatus))
  iconOrdering = element(by.id(this.testID.iconOrdering))
  datePickerForm = element(by.id(this.testID.datePickerForm))
  datePickerTo = element(by.id(this.testID.datePickerTo))
  applyButton = element(by.id(this.testID.applyButton))

  toBeVisible = async () => {
    await expect(this.modalFilter).toBeVisible()
  }

  filterDataWithStatus = async () => {
    await this.iconStatus.tap()
    await this.iconSortBy.tap()
    await this.iconOrdering.atIndex(1).tap()
    await this.iconOrdering.atIndex(0).tap()
    await this.iconSortBy.tap()
    await this.applyButton.tap()
  }

  filterDataWithDefault = async () => {
    await this.iconStatus.tap()
    await this.applyButton.tap()
  }
}

const modalFilter = new ModalFilter()
export default modalFilter
