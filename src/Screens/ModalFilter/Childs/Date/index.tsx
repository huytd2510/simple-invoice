import React, { useState } from 'react'
import { Text, TextStyle, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import dayjs from 'dayjs'
import { Colors } from '@/Utils'

export interface MyDatePickerProps {
  label: string
  callback: (date: string) => void
  defaultValue?: string
  propsStyleLabel?: TextStyle
  propsStyleDate?: TextStyle
  testID: string
}

export const MyDatePicker = (props: MyDatePickerProps) => {
  const [date, setDate] = useState<Date | null>(
    props.defaultValue ? new Date(props.defaultValue) : null,
  )
  const [open, setOpen] = useState(false)
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}
    >
      <Text style={props.propsStyleLabel}>{props.label}</Text>
      <TouchableOpacity onPress={() => setOpen(true)} testID={props.testID}>
        <Text
          style={[
            { color: Colors.activeColor, paddingHorizontal: 10 },
            props.propsStyleDate,
          ]}
        >
          {date ? dayjs(date).format('YYYY-MM-DD') : 'Select Date'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date || new Date()}
        onConfirm={date => {
          setOpen(false)
          setDate(date)
          props.callback(dayjs(date).format('YYYY-MM-DD'))
        }}
        mode={'date'}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}
