import React, {useCallback, useRef, useState} from 'react'
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../store'
import FilterList from './FilterList'
import SelectFilter from './SelectFilter'
import {setFilterTwoDepsSwitch} from '../../reducers/clientSideStateReducer'

const BottomSheet: React.FC = () => {
  const dispatch = useAppDispatch()
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const filterItem = useAppSelector(state => state.filterList.filterItem)
  const screenHeight = Dimensions.get('screen').height
  const showTansY = useRef(new Animated.Value(0)).current
  const backOpacity = useRef(new Animated.Value(0)).current
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleShowIn = useCallback(() => {
    setIsActive(true)
    Animated.timing(showTansY, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start()
    Animated.timing(backOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [showTansY, backOpacity])
  const handleShowOut = useCallback(() => {
    Animated.timing(showTansY, {
      toValue: screenHeight,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setIsActive(false)
    })
    Animated.timing(backOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [showTansY, screenHeight, backOpacity])
  console.log(filterItem)

  const handleShowSwipeOut = useCallback(() => {
    dispatch(setFilterTwoDepsSwitch(false))
  }, [dispatch])

  return (
    <>
      <Button title={'ShowIn'} onPress={handleShowIn} />
      <Button title={'ShowOut'} onPress={handleShowOut} />
      {isActive && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.bg} onPress={handleShowOut} />
          <Animated.View style={{opacity: backOpacity}}>
            <Animated.View style={[{transform: [{translateY: showTansY}]}]}>
              {filterTwoDeps && (
                <SelectFilter title={'a'} handleOut={handleShowSwipeOut} />
              )}
              <ScrollView style={styles.filterBody}>
                <Text style={styles.headTitle} onPress={handleShowSwipeOut}>
                  필터 변경
                </Text>
                <FilterList title={'sample 1'} />
              </ScrollView>
            </Animated.View>
          </Animated.View>
        </View>
      )}
    </>
  )
}

export default React.memo(BottomSheet)

const styles = StyleSheet.create({
  container: {},
  bg: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  filterBody: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 450,
    padding: 16,

    backgroundColor: 'white',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
})
