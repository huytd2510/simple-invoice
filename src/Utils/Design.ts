import { Dimensions, PixelRatio, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
const WIDTH_DESIGN = 375
const HEIGHT_DESIGN = 812

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export { deviceHeight, deviceWidth }

export const convertHeight = (height: number) => {
  const heightPhysicalDevice = deviceHeight > deviceWidth ? deviceHeight : deviceWidth
  return (heightPhysicalDevice / HEIGHT_DESIGN) * height
}

export const convertWidth = (width: number) => {
  const widthPhysicalDevice = deviceHeight < deviceWidth ? deviceHeight : deviceWidth
  return (widthPhysicalDevice / WIDTH_DESIGN) * width
}

export function convertFontSize(size: number) {
  if (!DeviceInfo.isTablet()) {
    return size
  }

  const widthPhysicalDevice = deviceHeight < deviceWidth ? deviceHeight : deviceWidth
  const scale = widthPhysicalDevice / WIDTH_DESIGN
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5
  }
}
