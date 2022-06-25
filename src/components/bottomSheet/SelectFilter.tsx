import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Animated} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../store'

const SelectFilter = () => {
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const dispatch = useAppDispatch()
  const handleOnShowIn = useCallback(() => {}, [])

  return (
    <>
      <Animated.View>
        <Text>Hello World</Text>
      </Animated.View>
    </>
  )
}

export default React.memo(SelectFilter)

const styles = StyleSheet.create({})
