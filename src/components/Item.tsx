import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

interface IStyleMap {
  [index: string]: string | number
}

interface Props {
  name: string | number
  desc: string | number
  age: number | string
  address: string | number
  width: IStyleMap
}

/**
 *
 * @param {name} param0 => 이름에 관한 파라미터
 * @param {desc} param1 => 내용에 관한 파라미터
 * @param {age} param2 => 나이에 관한 파라미터
 * @param {address} param3 => 주소에 관한 파라미터
 * @param {width} param4 => config 에서 받아온 props width에 관한 스타일 파라미터
 * @returns
 */
const Item: React.FC<Props> = ({name, desc, age, address, width}) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.cell, {width: width.name}]}>{name}</Text>
      <Text style={[styles.cell, {width: width.desc}]}>{desc}</Text>
      <Text style={[styles.cell, {width: width.age}]}>{age}</Text>
      <Text style={[styles.cell, {width: width.address}]}>{address}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cell: {
    paddingHorizontal: 15,
    width: 110,
    height: 50,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#dddddd',
    textAlignVertical: 'center',
  },
})
