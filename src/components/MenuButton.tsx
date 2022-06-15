import React, {useCallback, useState} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const MenuButton = () => {
  // eslint-disable-next-line no-undef
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleChangeActive = useCallback(() => {
    setIsActive(prev => (prev = !prev))
  }, [])
  const menuName = ['장비제어 설정', '제어알고리즘 설정']
  return (
    <View style={styles.layout}>
      {menuName.map((item, idx) => (
        <View style={styles.sort}>
          <Button
            key={idx}
            title={item}
            color={isActive ? 'skyblue' : 'blue'}
            onPress={handleChangeActive}
          />
        </View>
      ))}
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
  },
  sort: {
    flex: 1,
  },
})
