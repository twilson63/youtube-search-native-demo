import React from 'react'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'
import { View, Text } from 'react-native'

const Row = props => {
  return (
    <Link to={`/video/${props.id}`}>
      <View cls='pa1 bb flx-row aifs jcsb'>
        <Text cls='f6 blue'>{props.title}</Text>
      </View>
    </Link>
  )
}

export default wrap(Row)
