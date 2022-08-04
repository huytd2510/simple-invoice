type AlertType = 'info' | 'warn' | 'error' | 'success'

export type DropdownType = {
  alertWithType: (type: AlertType, title: string, message: string) => void
}

export class DropDownHolder {
  static dropDown: DropdownType
  static dropDownInModal: DropdownType

  static setDropDown(dropDown: DropdownType | null) {
    if (dropDown) {
      this.dropDown = dropDown
    }
  }

  static setDropDownModal(dropDown: DropdownType | null) {
    if (dropDown) {
      this.dropDownInModal = dropDown
    }
  }

  static alertError(message: string) {
    if (this.dropDownInModal) {
      this.dropDownInModal.alertWithType('error', 'Error', message)
    } else if (this.dropDown) {
      this.dropDown.alertWithType('error', 'Error', message)
    }
  }

  static alertWarning(message: string) {
    if (this.dropDownInModal) {
      this.dropDownInModal.alertWithType('warn', 'Warning', message)
    } else if (this.dropDown) {
      this.dropDown.alertWithType('warn', 'Warning', message)
    }
  }

  static alertSuccess(message: string) {
    if (this.dropDownInModal) {
      this.dropDownInModal.alertWithType('success', 'Success', message)
    } else if (this.dropDown) {
      this.dropDown.alertWithType('success', 'Success', message)
    }
  }
}
