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
import {useAppSelector} from '../../store'

const BottomSheet: React.FC = () => {
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
      duration: 600,
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
      duration: 600,
      useNativeDriver: true,
    }).start()
  }, [showTansY, screenHeight, backOpacity])
  console.log(filterItem)
  return (
    <>
      <Button title={'ShowIn'} onPress={handleShowIn} />
      <Button title={'ShowOut'} onPress={handleShowOut} />
      {isActive && (
        <View style={styles.container}>
          <Animated.View style={{opacity: backOpacity}}>
            <TouchableOpacity style={styles.bg} onPress={handleShowOut} />
            <Animated.View style={[{transform: [{translateY: showTansY}]}]}>
              <ScrollView style={styles.filterBody}>
                <Text style={styles.headTitle}>필터 변경</Text>
                {filterItem.map(item => (
                  <Text>{item.options[0].label}</Text>
                ))}
                <View>
                  <Text>container</Text>
                </View>
                <View>
                  <Text>Description?</Text>
                </View>
                <View>
                  <Text>List</Text>
                </View>
              </ScrollView>
            </Animated.View>
          </Animated.View>
        </View>
      )}
    </>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
  },
  bg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  filterBody: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 450,
    padding: 16,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
  },
  headTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
})
