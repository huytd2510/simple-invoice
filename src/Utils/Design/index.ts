import { Dimensions, PixelRatio, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
const WIDTH_DESIGN = 375
const HEIGHT_DESIGN = 1217
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const CURRENT_RESOLUTION = Math.sqrt(
  deviceHeight * deviceHeight + deviceWidth * deviceWidth,
)

let RESOLUTIONS_PROPORTION = 1

export const create = (
  designSize = { width: WIDTH_DESIGN, height: HEIGHT_DESIGN },
) => {
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  )
  RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION
}

export { deviceHeight, deviceWidth }

export const convertHeight = (height: number) => {
  return RESOLUTIONS_PROPORTION * height
  // const heightPhysicalDevice =
  //   deviceHeight > deviceWidth ? deviceHeight : deviceWidth
  // return (heightPhysicalDevice / HEIGHT_DESIGN) * height
}

export const convertWidth = (width: number) => {
  return RESOLUTIONS_PROPORTION * width
  // const widthPhysicalDevice =
  //   deviceHeight < deviceWidth ? deviceHeight : deviceWidth
  // return (widthPhysicalDevice / WIDTH_DESIGN) * width
}

export function convertFontSize(size: number) {
  if (!DeviceInfo.isTablet()) {
    return size
  }

  const widthPhysicalDevice =
    deviceHeight < deviceWidth ? deviceHeight : deviceWidth
  const scale = widthPhysicalDevice / WIDTH_DESIGN
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5
  }
}
