import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { IconButton } from '@/Components/IconButton'

export interface SearchBarProps {
  callback: (text: string) => void
  showFilter: () => void
  addInvoice: () => void
}

export const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState('')

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <IconButton
        name={'add-circle-outline'}
        callback={() => {
          props.addInvoice()
        }}
        testID={'searchBar.icon.addInvoice'}
      />
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder={'Search your invoices'}
          value={value}
          onChangeText={text => setValue(text)}
          onSubmitEditing={() => props.callback(value)}
          testID={'searchBar.input.search'}
        />
        <IconButton
          name={'search-outline'}
          testID={'searchBar.icon.search'}
          callback={() => {
            props.callback(value)
          }}
          colorIcon={'black'}
        />
      </View>
      <IconButton
        name={'filter-outline'}
        callback={() => {
          props.showFilter()
        }}
        testID={'searchBar.icon.filter'}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: { width: '80%', paddingHorizontal: 6 },
})
