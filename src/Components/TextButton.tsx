import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextStyles } from '@/Utils/Styles/Styles'

interface TextButtonProps {
  text: string
  callback: () => void
  isSelected?: boolean
  testID: string
}

export const TextButton = (props: TextButtonProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.isSelected ? 'green' : 'white',
          borderWidth: props.isSelected ? 0 : 1,
        },
      ]}
      testID={props.testID}
    >
      <TouchableOpacity
        onPress={props.callback}
        style={{ paddingHorizontal: 10, paddingVertical: 6 }}
      >
        <Text
          style={[
            TextStyles.normal,
            { color: props.isSelected ? 'white' : 'black' },
          ]}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 6,
  },
})
