import React from 'react'
import { View, ListView } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'
import Row from '../components/row'
import Header from './header'

const Main = props => {
  return (
    <View>
      <Header />
      <ListView
        enableEmptySections
        dataSource={props.videos}
        renderRow={({ id, ...video }) => <Row key={id} id={id} {...video} />}
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(Main))
