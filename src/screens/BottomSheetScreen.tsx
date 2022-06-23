import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Sample from './Sample'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomSheet from '../components/bottomSheet/BottomSheet'

const Stack = createNativeStackNavigator()

const BottomSheetScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'sample'} component={BottomSheet} />
    </Stack.Navigator>
  )
}

export default BottomSheetScreen

const styles = StyleSheet.create({})
