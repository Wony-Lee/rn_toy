import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {
  setFilterOneDepsTitle,
  setFilterSelectItem,
} from '../../reducers/filterReducer'
import {setFilterTwoDepsSwitch} from '../../reducers/clientSideStateReducer'
import {useAppDispatch, useAppSelector} from '../../store'

interface Props {
  title?: string
  subTitle?: string | number
}

const FilterList: React.FC<Props> = ({title, subTitle}) => {
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const dispatch = useAppDispatch()
  const handleSwipeIn = useCallback(
    (title?: string) => {
      console.log(title)
      // dispatch(setFilterSelectItem(title))
      dispatch(setFilterTwoDepsSwitch(true))
      dispatch(setFilterOneDepsTitle(title!))
    },
    [dispatch],
  )
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => handleSwipeIn(title)}>
        {title}
      </Text>
      <Text>{subTitle}</Text>
    </View>
  )
}

export default FilterList

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
})
