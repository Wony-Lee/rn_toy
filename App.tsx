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

import DataTables from './src/components/DataTable'
import {bodyData} from './src/mock/sample'
import {config} from './src/mock/mock.config'

interface Props {}

const App: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView>
      {/*<Counter />*/}
      {/*<MenuButton />*/}
      {/*<SampleTable />*/}
      <DataTables data={bodyData} config={config as any} />
    </SafeAreaView>
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
