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
import {SampleStateData} from './interface'

interface Props {
  title: string
  list: SampleStateData[]
}

const BottomSheet: React.FC<Props> = ({list, title}) => {
  const dispatch = useAppDispatch()
  const filterTwoDeps = useAppSelector(state => state.clientSide).filterTwoDeps
  const filterItem = useAppSelector(state => state.filterList.filterItem)
  const selectItem = useAppSelector(state => state.filterList.selectItem)

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

  const changeValue = (param: SampleStateData) => {
    const item = selectItem[param.key!]

    if (param?.list?.length > 0) {
      const list = param.list.filter((d: any) => d.select === item)
      return list[0]?.label
    }

    return ''
  }

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
              {filterTwoDeps &&
                list.map((item, idx) => (
                  <SelectFilter
                    key={idx}
                    title={item.label}
                    list={item.list}
                    handleOut={handleShowSwipeOut}
                  />
                ))}
              <ScrollView style={styles.filterBody}>
                <View style={{marginBottom: 16}}>
                  <Text style={styles.headTitle} onPress={handleShowSwipeOut}>
                    {title}
                  </Text>
                </View>
                {list.map((item, idx) => (
                  <FilterList
                    key={idx}
                    title={item.label}
                    subTitle={changeValue(item)}
                  />
                ))}
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
    padding: 25,

    backgroundColor: 'white',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
})
