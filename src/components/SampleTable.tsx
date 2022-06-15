import React, {useCallback, useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {DataTable} from 'react-native-paper'

interface Props {}

interface ISample {
  item: string
  isActive: string
  time: string
}
const optionsPerPage = [2, 3, 4]
const SampleTable = () => {
  const [page, setPage] = React.useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])

  const [sampleItem, setSampleItem] = useState<ISample[]>([])
  const sampleDataSet = useCallback(() => {
    const data: ISample[] = []
    for (let i = 0; i <= 6; i++) {
      data.push({
        item: `item${i}`,
        isActive: `Active${i}`,
        time: `time${i}`,
      })
    }
    setSampleItem(data)
  }, [])

  useEffect(() => {
    sampleDataSet()
    setPage(0)
  }, [])
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>장비ID</DataTable.Title>
        <DataTable.Title numeric>사용여부</DataTable.Title>
        <DataTable.Title numeric>적용시간</DataTable.Title>
      </DataTable.Header>

      {sampleItem.map(item => (
        <DataTable.Row key={item.item}>
          <DataTable.Cell>이미지 {item.item}</DataTable.Cell>
          <DataTable.Cell numeric>{item.isActive}</DataTable.Cell>
          <DataTable.Cell numeric>
            {item.time} {'>'}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={page => setPage(page)}
        label={itemsPerPage}
      />
    </DataTable>
  )
}

export default SampleTable

const styles = StyleSheet.create({})
