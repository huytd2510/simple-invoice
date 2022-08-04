import { Invoice } from '@/Models/Invoice'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { navigate } from '@/Navigators/utils'
import React from 'react'
import { TextStyles } from '@/Utils/Styles/Styles'
import { convertHeight } from '@/Utils/Design'

export interface InvoiceItemProps {
  invoice: Invoice
  index: number
}

export const InvoiceItem = (props: InvoiceItemProps) => {
  const { invoice, index } = props
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('InvoiceDetail', { invoice: props.invoice })
      }}
      testID={'invoiceItem.button.item'}
    >
      <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
        <Text style={[styles.titleStyle, { flex: 1 }]}>{index}</Text>
        <Text style={[styles.titleStyle, { flex: 3 }]}>
          {invoice?.invoiceNumber ?? 'invoiceNumber'}
        </Text>
        <Text style={[styles.descriptionStyle, { flex: 3 }]}>
          {invoice?.description ?? 'description'}
        </Text>
        <Text style={[styles.titleStyle, { flex: 1 }]}>
          {invoice?.totalPaid ?? 'totalPaid'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  titleStyle: {
    ...TextStyles.header,
    paddingHorizontal: 5,
  },
  descriptionStyle: {
    ...TextStyles.normal,
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  titleInvoice: {
    ...TextStyles.header,
    fontSize: 20,
    fontWeight: '600',
    marginVertical: convertHeight(10),
  },
})
