/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {Provider} from 'react-redux'
import store from './src/store'
import BottomSheetScreen from './src/screens/BottomSheetScreen'
import {NavigationContainer} from '@react-navigation/native'
import BottomSheet from './src/components/bottomSheet/BottomSheet'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/*<SafeAreaView>*/}
        {/*<Counter />*/}
        {/*<MenuButton />*/}
        {/*<SampleTable />*/}
        {/*<DataTables data={bodyData} config={config} />*/}
        {/*<BottomSheetScreen />*/}
        {/*</SafeAreaView>*/}
        <BottomSheet />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
