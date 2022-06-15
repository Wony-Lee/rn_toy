import React, {useCallback, useState} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleIncrease = useCallback(() => {
    setCounter(prev => (prev += 1))
  }, [])
  const handleDecrease = useCallback(() => {
    setCounter(prev => (prev -= 1))
  }, [])
  return (
    <>
      <View>
        <Text>{counter}</Text>
      </View>
      <Text>Hello World</Text>
      <View style={styles.row}>
        <Button title={'Up'} onPress={handleIncrease} />
        <Button title={'Down'} onPress={handleDecrease} />
      </View>
    </>
  )
}

export default Counter

const styles = StyleSheet.create({
  row: {
    flex: 1,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
})
