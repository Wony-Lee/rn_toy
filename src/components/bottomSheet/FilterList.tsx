import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {setFilterSelectItem} from '../../reducers/filterReducer'
import {setFilterTwoDepsSwitch} from '../../reducers/clientSideStateReducer'
import {useAppDispatch, useAppSelector} from '../../store'

interface Props {
  title?: string
}

const FilterList: React.FC<Props> = ({title}) => {
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const dispatch = useAppDispatch()
  const handleSwipeIn = useCallback(
    (title?: string) => {
      console.log(title)
      dispatch(setFilterSelectItem(title!))
      dispatch(setFilterTwoDepsSwitch(true))
    },
    [dispatch],
  )
  return (
    <View>
      <Text style={styles.text} onPress={() => handleSwipeIn(title)}>
        {title}
      </Text>
    </View>
  )
}

export default FilterList

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
})
