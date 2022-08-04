import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { MyBackground } from '@/Components/MyBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IFetchInvoicesParams, Invoice } from '@/Models/Invoice'
import { TextStyles } from '@/Utils/Styles/Styles'
import { convertHeight, convertWidth } from '@/Utils/Design'
import { SearchBar } from '@/Screens/InvoiceList/Child/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from '@/Thunk/Invoice'
import { RootState } from '@/Store'
import { ModalFilter } from '@/Screens/ModalFilter'
import { navigate } from '@/Navigators/utils'
import { InvoiceItem } from './Child/InvoiceItem'

export const InvoiceList = () => {
  const [filterData, setFilterData] = useState(new IFetchInvoicesParams())
  const [showModal, setShowModal] = useState(false)
  const invoiceResData = useSelector((state: RootState) => {
    return state.invoiceReducer.responseInvoice
  })
  const invoiceList = invoiceResData?.data ?? []

  const isLoading = useSelector((state: RootState) => {
    return state.appStateReducer.isLoading
  })

  const dispatch = useDispatch()

  useEffect(() => {
    searchOrFiler(filterData)
  }, [])

  const searchOrFiler = (param: IFetchInvoicesParams) => {
    let isMaxPage = false
    if (invoiceResData) {
      const maxPage = Math.ceil(
        invoiceResData.paging.totalRecords / invoiceResData.paging.pageSize,
      )
      isMaxPage = maxPage < param?.pageNum! && param?.pageNum !== 1
    }
    if (!isMaxPage) {
      dispatch(fetchInvoices(param))
      setFilterData(param)
    }
  }

  return (
    <MyBackground testId={'invoiceList.screen'}>
      <SafeAreaView
        style={{ paddingHorizontal: convertWidth(6), flex: 1 }}
        onTouchStart={() => {
          Keyboard.dismiss()
        }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.container}>
            <SearchBar
              callback={keyword => {
                const params = { ...filterData }
                params.keyword = keyword
                params.pageNum = 1
                searchOrFiler(params)
              }}
              showFilter={() => {
                setShowModal(true)
              }}
              addInvoice={() => {
                navigate('CreateInvoice', {})
              }}
            />
            <View style={styles.containerTitle}>
              <Text style={styles.titleInvoice}>My Invoices</Text>
            </View>
            <FlatList
              data={invoiceList ?? []}
              renderItem={({ item, index }) => {
                return <InvoiceItem invoice={item} index={index + 1} />
              }}
              onEndReached={() => {
                const data = { ...filterData }
                data.pageNum = (data?.pageNum ?? 1) + 1
                setFilterData(data)
                searchOrFiler(data)
              }}
              ListHeaderComponent={() => {
                return (
                  <View>
                    <View style={styles.containerHeader}>
                      <Text style={[styles.titleStyle, { flex: 1 }]}>#</Text>
                      <Text style={[styles.titleStyle, { flex: 3 }]}>
                        Invoice Number
                      </Text>
                      <Text style={[styles.titleStyle, { flex: 3 }]}>
                        Description
                      </Text>
                      <Text style={[styles.titleStyle, { flex: 1 }]}>
                        Total Paid
                      </Text>
                    </View>
                    {isLoading && <ActivityIndicator color={'white'} />}
                  </View>
                )
              }}
              ListEmptyComponent={() => {
                if (isLoading) {
                  return null
                }
                return (
                  <View
                    style={styles.containerEmptyList}
                    testID={'listInvoice.empty'}
                  >
                    <Text style={styles.titleStyle}>List empty</Text>
                  </View>
                )
              }}
            />
          </View>
        </KeyboardAvoidingView>

        <ModalFilter
          dismiss={() => {
            setShowModal(false)
          }}
          isVisible={showModal}
          apply={data => {
            setShowModal(false)
            setFilterData(data)
            data.pageNum = 1
            searchOrFiler(data)
          }}
        />
      </SafeAreaView>
    </MyBackground>
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
  containerTitle: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  containerHeader: { paddingVertical: 10, flexDirection: 'row' },
  containerEmptyList: {
    width: '100%',
    height: convertHeight(400),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { marginTop: convertHeight(20), flex: 1, height: '100%' },
})
