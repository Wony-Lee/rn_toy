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
  const selectItem = useAppSelector(state => state.filterList).selectItem
  const dispatch = useAppDispatch()
  const handleOnShowIn = useCallback(() => {}, [])

  const handleSwipeOn = useCallback(() => {}, [])
  const handleSlideOut = useCallback(
    (title?: string) => {
      console.log(title)

      // dispatch(setFilterSelectItem(title!))
      dispatch(setFilterTwoDepsSwitch(true))
    },
    [dispatch],
  )

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.header} onPress={handleOut}>
        닫기
      </Text>
      <Text style={styles.text} onPress={() => handleSlideOut(title)}>
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
    padding: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
  },
})
