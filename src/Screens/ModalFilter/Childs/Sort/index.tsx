import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextButton } from '@/Components/TextButton'
import _ from 'lodash'

export interface CategoriesProps {
  data: string[]
  callbackData: (data: string[]) => void
  multiSelected?: boolean
  defaultValue?: string[]
  label: string
  testID: string
}

export const Categories = (props: CategoriesProps) => {
  const [selectedValue, setSelectedValue] = useState<string[]>(
    props.defaultValue || [],
  )
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{props.label}</Text>
      {props.data.map(item => {
        const isSelected = _.find(selectedValue, i => i === item)
        return (
          <TextButton
            key={item}
            text={item}
            testID={props.testID}
            isSelected={!!isSelected}
            callback={() => {
              let newListSelected = [...selectedValue]
              if (props.multiSelected) {
                if (isSelected) {
                  _.remove(newListSelected, i => i === item)
                } else {
                  newListSelected = [...newListSelected, item]
                }
              } else {
                if (
                  !_.isEmpty(newListSelected) &&
                  !_.isEmpty(newListSelected[0]) &&
                  isSelected
                ) {
                  newListSelected = []
                } else {
                  newListSelected = [item]
                }
              }

              setSelectedValue(newListSelected)
              props.callbackData(newListSelected)
            }}
          />
        )
      })}
    </View>
  )
}
