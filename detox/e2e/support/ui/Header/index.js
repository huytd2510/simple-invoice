// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class Header {
  testID = {
    iconBack: 'header.icon.back',
  }

  iconBack = element(by.id(this.testID.iconBack))


  goBack = async () => {
    await this.iconBack.tap()
  }
}

const header = new Header()
export default header
