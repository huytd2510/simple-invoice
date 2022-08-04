import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { MyBackground } from '@/Components/MyBackground'
import { Invoice, Merchant } from '@/Models/Invoice'
import { TextStyles } from '@/Utils/Styles/Styles'
import { Header } from '@/Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

export interface InvoiceDetailProps {
  data: Invoice
}

// @ts-ignore
export const InvoiceDetail = ({ route }) => {
  const { invoice } = route.params
  return (
    <MyBackground testId={'invoiceDetail.screen'}>
      <SafeAreaView>
        <Header label={'Invoice detail'} />
        <ScrollView>
          <InvoiceInfo data={invoice} />
        </ScrollView>
      </SafeAreaView>
    </MyBackground>
  )
}

const InvoiceInfo = (props: InvoiceDetailProps) => {
  const { data } = props

  return (
    <View style={{ width: '80%', paddingBottom: 50 }}>
      <View style={styles.containerItem}>
        <Text style={styles.title}>InvoiceId</Text>
        <Text style={styles.data} numberOfLines={2}>
          {data.invoiceId}
        </Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Invoice Number</Text>
        <Text style={styles.data}>{data.invoiceNumber}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Invoice type</Text>
        <Text style={styles.data}>{data.type}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Invoice type</Text>
        <Text style={styles.data}>{data.type}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Invoice Date</Text>
        <Text style={styles.data}>{data.invoiceDate}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Create At</Text>
        <Text style={styles.data}>{data.createdAt}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Due At</Text>
        <Text style={styles.data}>{data.dueDate}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Number Of Documents</Text>
        <Text style={styles.data}>{data.numberOfDocuments}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Total Tax</Text>
        <Text style={styles.data}>{data.totalTax}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Total Amount</Text>
        <Text style={styles.data}>{data.totalAmount}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Balance Amount</Text>
        <Text style={styles.data}>{data.balanceAmount}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.data} numberOfLines={10}>
          {data.description}
        </Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Total Paid</Text>
        <Text style={styles.data}>{data.totalPaid}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Invoice Sub Total</Text>
        <Text style={styles.data}>{data.invoiceSubTotal}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Total Discount</Text>
        <Text style={styles.data}>{data.totalDiscount}</Text>
      </View>

      <View style={styles.containerItem}>
        <Text style={styles.title}>Version</Text>
        <Text style={styles.data}>{data.version}</Text>
      </View>

      <View style={styles.containerItem}>
        <Text style={styles.title}>Purchase Order Matched</Text>
        <Text style={styles.data}>{data.purchaseOrderMatched}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Regulated</Text>
        <Text style={styles.data}>{data.isRegulated ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Insured</Text>
        <Text style={styles.data}>{data.isInsured ? 'Yes' : 'No'}</Text>
      </View>
      <View style={[styles.containerItem]}>
        <Text style={styles.title}>Status</Text>
        <View style={{ flexDirection: 'column' }}>
          {data.status.map(item => {
            return (
              <View
                style={[
                  styles.containerItem,
                  { marginVertical: 0, width: '100%' },
                ]}
                key={item.key}
              >
                <Text style={styles.title}>{item.key}</Text>
                <Text style={styles.data}>{item.value}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View style={[styles.containerItem]}>
        <Text style={styles.title}>Custom Fields</Text>
        <View style={{ flexDirection: 'column' }}>
          {data.customFields.map(item => {
            return (
              <View
                style={[
                  styles.containerItem,
                  {
                    marginVertical: 0,
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'flex-start',
                  },
                ]}
                key={item.key}
              >
                <Text style={styles.title}>{item.key}</Text>
                <Text style={styles.data}>{item.value}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Customer</Text>
        <Text style={styles.data}>{data?.customer?.id}</Text>
        <View style={{ flexDirection: 'column' }}>
          {data.customer?.addresses ??
            [].map(item => {
              return (
                <View style={styles.containerItem}>
                  <Text style={styles.data}>{item}</Text>
                </View>
              )
            })}
        </View>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.title}>Merchant</Text>
        <Text style={styles.data}>{data.merchant.id}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 6,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    ...TextStyles.header,
    marginHorizontal: 4,
  },
  data: {
    ...TextStyles.normal,
    marginHorizontal: 4,
  },
})
