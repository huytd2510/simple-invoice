// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


beforeAll(async () => {
  await device.launchApp({
    newInstance: true,
    launchArgs: { detoxPrintBusyIdleResources: 'YES' },
  })
})
