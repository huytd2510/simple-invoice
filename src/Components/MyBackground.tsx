import React from 'react'
import {StyleSheet, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface MyBackgroundProps {
  children: JSX.Element
  testId?: string
}

export const MyBackground = (props: MyBackgroundProps) => {
  return (
    <LinearGradient
      colors={['#64C8BD', '#6E7D86']}
      style={styles.linearGradient}
      testID={props.testId}
    >
      {props.children}
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
})
