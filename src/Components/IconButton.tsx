import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { convertHeight } from '@/Utils'

export interface IconButtonProps {
  name: string
  styleIcon?: StyleProp<any>
  callback: () => void
  colorIcon?: string
    testID: string
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.callback}
      testID={props.testID}
      style={{
        height: convertHeight(34),
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon
        name={props.name}
        size={24}
        color={props.colorIcon ?? 'white'}
        style={[props.styleIcon]}
      />
    </TouchableOpacity>
  )
}
