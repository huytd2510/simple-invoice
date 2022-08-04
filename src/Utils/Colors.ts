export const Colors = {
  black: '#000',
  white: '#fff',
  backgroundColor: '#F9F9F9',
  activeColor: '#26BD7E',
  main: '#3f50b5',
  inactiveColor: '#2B3445',
  ebonyClay_100: '#2B3445',
  dark_40: '#929292',
  dark_80: '#474747',
  dark_100: '#2F2F2F',
  gray_100: '#929292',
}

export const ColorPalettes = {
  Primary: '#ED4637',
  Secondary: '#E0E3E8',
  Black: '#2F2F2F',
  BackgroundColor: '#F9F9F9',
  Light: '#FDFDFD',
  Gray: '#949CB0',
}

export type VariantType = 'primary' | 'disable' | 'secondary'
interface IThemColors {
  backgroundColor: string
  borderColor: string
  color: string
}

function getThemeColors(variant: VariantType): IThemColors {
  switch (variant) {
    case 'primary': {
      return {
        backgroundColor: ColorPalettes.Primary,
        borderColor: ColorPalettes.Primary,
        color: ColorPalettes.Light,
      }
    }
    case 'disable': {
      return {
        backgroundColor: ColorPalettes.Secondary,
        borderColor: ColorPalettes.Secondary,
        color: ColorPalettes.Gray,
      }
    }
    case 'secondary': {
      return {
        backgroundColor: ColorPalettes.Secondary,
        borderColor: ColorPalettes.Secondary,
        color: ColorPalettes.Gray,
      }
    }

    default: {
      return {
        backgroundColor: ColorPalettes.Primary,
        borderColor: ColorPalettes.Primary,
        color: ColorPalettes.Light,
      }
    }
  }
}

export { getThemeColors }
