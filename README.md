# react-native-checkbox-reanimated

Animated checkbox built with Reanimated v2.
This component has been created for [the React Native tutorial here](https://github.com/craftzdog/react-native-animated-todo).

![demo](./doc/demo.gif)

## Prerequisites

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)

## Installation

```sh
npm install react-native-checkbox-reanimated
npm install react-native-reanimated react-native-svg
```

## Usage

```typescript
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
```

## License

[MIT](./LICENSE)

---

Looking for a Markdown note-taking app? Check out my app called Inkdrop:

[![Inkdrop](https://github.com/craftzdog/dotfiles-public/raw/master/images/inkdrop.png)](https://www.inkdrop.app/)
