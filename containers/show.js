import React from 'react'
import { WebBrowser } from 'expo'

import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { find, propEq, pathOr } from 'ramda'
import { Link } from 'react-router-native'

class Show extends React.Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'SET_VIDEO',
      payload: find(
        propEq('id', this.props.match.params.id),
        this.props.videoItems
      )
    })
  }
  render () {
    return (
      <View>
        <Text>{pathOr('', [ 'props', 'video', 'title' ], this)}</Text>
        <Button
          title='Open Video'
          onPress={() => {
            WebBrowser.openBrowserAsync(
                `https://www.youtube.com/watch?v=${this.props.video.id}`
              )
          }}
        />
        <Link to='/'>
          <Text>Back to Search</Text>
        </Link>
      </View>
    )
  }
}
const connector = connect(state => state)
export default connector(Show)
