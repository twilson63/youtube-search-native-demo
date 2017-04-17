import { Constants } from 'expo'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

import Main from './containers/main'
import Show from './containers/show'

import { NativeRouter, Route } from 'react-router-native'

import NativeTachyons from 'react-native-style-tachyons'

NativeTachyons.build({ rem: 16 }, StyleSheet)

class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path='/' component={Main} />
          <Route path='/video/:id' component={Show} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  }
})

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
