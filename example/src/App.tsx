import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

export default function App() {
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
        <AnimatedCheckbox
          checked={checked}
          highlightColor="#4444ff"
          checkmarkColor="#ffffff"
          boxOutlineColor="#4444ff"
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    width: 64,
    height: 64
  }
})
