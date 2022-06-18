import React, {useState, useCallback, useEffect} from 'react'
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native'

import Item from './Item'

export interface ISampleData {
  [index: string]: string | number
}
interface IOrderInfo {
  orderSeq: number | undefined
  orderState: number
}

interface Props {
  data: ISampleData[]
  config: IStyleMap[]
}
interface IStyleMap {
  [index: string]: number | string
}

const DataTables: React.FC<Props> = ({data, config}) => {
  const [cloneData, setCloneData] = useState<ISampleData[]>([])
  const [orderInfo, setOrderInfo] = useState<IOrderInfo>({
    orderSeq: 0,
    orderState: 0,
  })

  const styleMap: IStyleMap = {}
  config.forEach(d => (styleMap[d.key] = d.width))

  // order 관련
  const handleOrdering = useCallback(
    (idx: number) => {
      // 시컨스가 맞으면 롤링, 틀리면 1부터 다시롤링
      let state = orderInfo.orderState
      if (orderInfo.orderSeq !== idx) {
        state += 1
      } else {
        state += 1
        if (state > 2) {
          state = 0
          console.log(state)
        }
      }
      const orderKey = config[idx].key
      setOrderInfo({orderSeq: idx, orderState: state})

      // state 0 = 정렬 없음, 1 = 내름, 2 = 오름
      if (state === 0) {
        setCloneData([...data])
      }
      if (state === 1) {
        // setCloneData(cloneData.sort((a, b) => a[orderKey] - b[orderKey]))
        // 내림차순 sorting
        setCloneData(
          cloneData.sort((a, b) => {
            if (a[orderKey] < b[orderKey]) return -1
            if (a[orderKey] > b[orderKey]) return 1
            if (a[orderKey] === b[orderKey]) return 0
            else return -1
          }),
        )
      }

      if (state === 2) {
        // setCloneData(cloneData.sort((a, b) => b[orderKey] - a[orderKey]))
        // 오름차순 sorting
        setCloneData(
          cloneData.sort((a, b) => {
            if (b[orderKey] < a[orderKey]) return -1
            if (b[orderKey] > a[orderKey]) return 1
            if (a[orderKey] === b[orderKey]) return 0
            else return -1
          }),
        )
      }
    },
    [data, config, cloneData, orderInfo],
  )

  useEffect(() => {
    // 초기에 data 를 copy해서 setCloneData에 넣어줌.
    const tempData = [...data]
    setCloneData(tempData)
  }, [data, config])

  return (
    <ScrollView horizontal={true}>
      <View style={styles.col}>
        <View style={styles.row}>
          {config.map((item, idx) => (
            <Text
              key={idx}
              style={[styles.text, {width: item.width}]}
              onPress={() => handleOrdering(idx)}>
              {item.label}
            </Text>
          ))}
        </View>
        <FlatList
          data={cloneData}
          keyExtractor={(v): string => v.id as string}
          renderItem={({item}) => {
            const {name, desc, age, address} = item
            return (
              <Item
                name={name}
                desc={desc}
                age={age}
                address={address}
                width={styleMap}
              />
            )
          }}
        />

        <View>
          <Text>Footer</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DataTables

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    display: 'flex',
    flex: 1,

    width: 110,
    height: 40,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#dddddd',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
