import React from 'react'
import { Text, View } from 'react-native'
import { IconButton } from '@/Components/IconButton'
import { goBack } from '@/Navigators/utils'
import { TextStyles } from '@/Utils/Styles/Styles'
import { convertWidth } from '@/Utils'

interface HeaderProps {
  label: string
}

export const Header = (props: HeaderProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IconButton testID={'header.icon.back'} name={'chevron-back-outline'} callback={() => goBack()} />
      <Text style={TextStyles.header}>{props.label}</Text>
      <View style={{ width: convertWidth(48) }} />
    </View>
  )
}
