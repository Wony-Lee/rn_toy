import React, {useCallback, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Animated} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../store'
import {
  setFilterOneDepsTitle,
  setFilterSelectItem,
} from '../../reducers/filterReducer'
import {setFilterTwoDepsSwitch} from '../../reducers/clientSideStateReducer'
import {SampleListData} from './interface'

interface Props {
  title?: string
  handleOut?: () => void
  list?: SampleListData[]
}

const SelectFilter: React.FC<Props> = ({title, handleOut, list}) => {
  console.log('select Filter =>', list, ' ==== title >', title)
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const selectItem = useAppSelector(state => state.filterList).selectItem
  const filterOneDepsTitle = useAppSelector(
    state => state.filterList,
  ).filterOneDepsTitle
  const dispatch = useAppDispatch()
  const handleOnShowIn = useCallback(() => {}, [])

  const handleSwipeOn = useCallback(() => {}, [])
  const handleSlideOut = useCallback(
    (title?: string) => {
      console.log('title=>', title)

      // dispatch(setFilterSelectItem(title!))
      dispatch(setFilterTwoDepsSwitch(true))
    },
    [dispatch],
  )

  useEffect(() => {
    setFilterOneDepsTitle(title!)
  }, [title])
  console.log('filterOneDepsTitle', filterOneDepsTitle)
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.header} onPress={handleOut}>
        닫기
      </Text>
      {list?.map((item, idx) => (
        <Text
          key={idx}
          style={styles.text}
          onPress={() => handleSlideOut(title)}>
          {item.label}
        </Text>
      ))}
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
