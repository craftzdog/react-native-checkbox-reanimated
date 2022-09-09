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

When you're done installing `react-native-reanimated` don't forget to add the plugin to your `babel.config.js` file. Like so:
```js
module.exports = {
  presets: [
    ...
  ],
  plugins: [
    ...
    'react-native-reanimated/plugin',
  ],
};
```
make sure the `react-native-reanimated/plugin` is added last.

Please make sure that you give the [React Native Reanimated Documentation](https://docs.swmansion.com/react-native-reanimated/) a read.

Please take note that in most cases while using this package with expo, the version of expo that you have installed will not be compatible with the latest version of the `react-native-reanimated` package and the `react-native-svg` package so if you get an error like so:
```sh
Some dependencies are incompatible with the installed expo package version:
  - react-native-reanimated - expected version: ~2.9.1 - actual version installed: 2.10.0
  - react-native-svg - expected version: 12.3.0 - actual version installed: 13.1.0
Your project may not work correctly until you install the correct versions of the packages.
To install the correct versions of these packages, please run: expo doctor --fix-dependencies,
or install individual packages by running expo install [package-name ...]
```
make sure you run the recommended `expo doctor --fix-dependencies` command to fix it and clear any errors you might have while using this package.

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
