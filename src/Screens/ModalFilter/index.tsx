import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Modal from 'react-native-modal'
import { Colors, convertHeight } from '@/Utils'
import { IconButton } from '@/Components/IconButton'
import { Categories } from '@/Screens/ModalFilter/Childs/Sort'
import { MyDatePicker } from '@/Screens/ModalFilter/Childs/Date'
import { TextStyles } from '@/Utils/Styles/Styles'
import { IFetchInvoicesParams } from '@/Models/Invoice'

export interface ModalFilterProps {
  isVisible: boolean
  dismiss: () => void
  apply: (params: IFetchInvoicesParams) => void
}

export const TYPES_SORT = ['CREATED_DATE']
export const TYPES_STATUS = ['PAID']
export const TYPES_ORDERING = ['ASCENDING', 'DESCENDING']

export const ModalFilter = (props: ModalFilterProps) => {
  const [typeSorts, setTypeSort] = useState<string>('CREATED_DATE')
  const [typeStatus, setTypeStatus] = useState<string>('')
  const [typeOrder, setTypeOrder] = useState<string>('ASCENDING')
  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')

  return (
    <Modal
      isVisible={props.isVisible}
      onSwipeComplete={() => props.dismiss()}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}
    >
      <View style={styles.container} testID={'modal_filter'}>
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
          <IconButton
            name={'close-outline'}
            colorIcon={'black'}
            callback={props.dismiss}
            testID={'close_modal'}
          />
        </View>
        <ScrollView>
          <View>
            <Categories
              label={'Sort by'}
              data={TYPES_SORT}
              multiSelected={false}
              callbackData={data => setTypeSort(data[0])}
              defaultValue={[typeSorts]}
              testID={'modal.category.sortBy'}
            />
            <Categories
              label={'Status'}
              data={TYPES_STATUS}
              multiSelected={false}
              callbackData={data => setTypeStatus(data[0] ?? '')}
              defaultValue={[typeStatus]}
              testID={'modal.category.status'}
            />
            <Categories
              label={'Order by'}
              data={TYPES_ORDERING}
              multiSelected={false}
              callbackData={data => setTypeOrder(data[0])}
              defaultValue={[typeOrder]}
              testID={'modal.category.ordering'}
            />
            <MyDatePicker
              callback={date => {
                setFromDate(date)
              }}
              label={'From date'}
              defaultValue={fromDate}
              testID={'modal.datepicker.formDate'}
            />
            <MyDatePicker
              callback={date => {
                setToDate(date)
              }}
              label={'To date'}
              defaultValue={toDate}
              testID={'modal.datepicker.toDate'}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => {
            const data = new IFetchInvoicesParams()
            data.fromDate = fromDate
            data.toDate = toDate
            data.ordering = typeOrder
            data.sortBy = typeSorts
            data.status = typeStatus
            props.apply(data)
          }}
          testID={'modal.button.apply'}
        >
          <Text style={TextStyles.header}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
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
  container: {
    height: convertHeight(400),
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 10,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})
