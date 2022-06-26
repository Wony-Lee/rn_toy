import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Animated} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../store'
import {setFilterSelectItem} from '../../reducers/filterReducer'
import {setFilterTwoDepsSwitch} from '../../reducers/clientSideStateReducer'

interface Props {
  title: string
  handleOut?: () => void
}

const SelectFilter: React.FC<Props> = ({title, handleOut}) => {
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const dispatch = useAppDispatch()
  const handleOnShowIn = useCallback(() => {}, [])

  const handleSwipeOn = useCallback(() => {}, [])
  const handleSwipeOut = useCallback(
    (title?: string) => {
      console.log(title)
      dispatch(setFilterSelectItem(title!))
      dispatch(setFilterTwoDepsSwitch(true))
    },
    [dispatch],
  )

  return (
    <Animated.View style={styles.container}>
      <Text onPress={handleOut}>닫기</Text>
      <Text style={styles.text} onPress={() => handleSwipeOut(title)}>
        {title}
      </Text>
    </Animated.View>
  )
}

export default React.memo(SelectFilter)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 450,
    backgroundColor: 'red',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
})
