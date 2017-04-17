import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

import { wrap } from 'react-native-style-tachyons'

import { connect } from 'react-redux'

const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0OTIzOTIyNTQsImV4cCI6MTUyMzkyODI1NCwiYXVkIjoieW91dHViZS1hcGkubm93LnNoIiwic3ViIjoiZ3Vlc3QifQ.FSMS3Bx3Adsx65IJc_svUO6wuc2oYW_8wN4TwBcBOT8'

const Header = props => {
  return (
    <View>
      <TextInput
        value={props.value}
        onChangeText={
          value => props.dispatch({ type: 'SET_TEXT', payload: value })
        }
        onSubmitEditing={() => props.dispatch(dispatch => {
          dispatch({ type: 'FETCHING_VIDEOS' })
          return fetch(
              `https://youtube-search-api.now.sh/?q=${encodeURI(props.value)}`,
              { headers: { Authorization: 'Bearer ' + jwt } }
            )
              .then(res => res.json())
              .then(
                results => dispatch({ type: 'SET_VIDEOS', payload: results })
              )
        })}
        placeholder='Type Name of Video'
        cls='ba br2 b--blue h2 mh4 mt2 pa1'
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(Header))
