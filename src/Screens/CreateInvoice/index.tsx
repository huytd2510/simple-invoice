import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { MyBackground } from '@/Components/MyBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@/Components/Header'
import { TextStyles } from '@/Utils/Styles/Styles'
import { Colors, convertHeight, convertWidth } from '@/Utils'
import { MyDatePicker } from '@/Screens/ModalFilter/Childs/Date'
import { InvoiceRequest } from '@/Models/InvoiceRequest'
import { useDispatch, useSelector } from 'react-redux'
import { createInvoice } from '@/Thunk/Invoice'
import { RootState } from '@/Store'
import { goBack } from '@/Navigators/utils'
import _ from 'lodash'
import { clearData } from '@/Reducers/Invoice'

export const CreateInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceRef, setInvoiceRef] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const dispatch = useDispatch()
  const createInvoiceSuccess = useSelector((state: RootState) => {
    return state.invoiceReducer.createInvoiceSuccess
  })

  useEffect(() => {
    if (createInvoiceSuccess) {
      goBack()
    }
    return () => {
      dispatch(clearData())
    }
  }, [createInvoiceSuccess])

  const startCreateInvoice = () => {
    const data = new InvoiceRequest({
      invoiceReference: invoiceRef,
      invoiceNumber: invoiceNumber,
      dueDate: dueDate,
      description: description,
    })
    dispatch(createInvoice(data))
  }

  const disable =
    _.isEmpty(invoiceNumber) ||
    _.isEmpty(invoiceRef) ||
    _.isEmpty(description) ||
    _.isEmpty(dueDate)

  return (
    <MyBackground testId={'createInvoice.screen'}>
      <SafeAreaView>
        <Header label={'Create Invoice'} />
        <View style={{ height: '80%' }} onTouchStart={Keyboard.dismiss}>
          <ScrollView keyboardShouldPersistTaps={'handled'}>
            <InputLabel
              label={'Invoice Number'}
              callback={data => {
                setInvoiceNumber(data)
              }}
              testID={'createInvoice.input.invoiceNumber'}
            />
            <InputLabel
              label={'Invoice Reference'}
              callback={data => {
                setInvoiceRef(data)
              }}
              testID={'createInvoice.input.invoiceRef'}
            />
            <InputLabel
              label={'Description'}
              callback={data => {
                setDescription(data)
              }}
              testID={'createInvoice.input.description'}
            />
            <MyDatePicker
              callback={date => {
                setDueDate(date)
              }}
              label={'Due Date'}
              testID={'datePicker.button'}
              defaultValue={''}
              propsStyleDate={{ color: 'white' }}
              propsStyleLabel={{ color: 'white', marginLeft: convertWidth(16) }}
            />
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[styles.containerButton, { opacity: disable ? 0.5 : 1 }]}
          disabled={disable}
          testID={'createInvoice.button'}
          onPress={startCreateInvoice}
        >
          <Text style={TextStyles.header}>Apply</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </MyBackground>
  )
}

const styles = StyleSheet.create({
  containerButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: Colors.main,
  },
})

export interface InputLabelProps {
  label: string
  value?: string
  callback: (value: string) => void
  testID: string
}

export const InputLabel = (props: InputLabelProps) => {
  const [value, setValue] = useState(props.value ?? '')
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: convertWidth(16),
        marginVertical: convertHeight(6),
      }}
    >
      <Text style={TextStyles.subHeader}>{props.label}</Text>
      <TextInput
        value={value}
        testID={props.testID}
        style={{
          borderBottomWidth: 0.5,
          width: '70%',
          marginHorizontal: 16,
          color: 'white',
          borderColor: 'white',
        }}
        onChangeText={value => {
          setValue(value)
          props.callback(value)
        }}
      />
    </View>
  )
}
