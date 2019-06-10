import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text } from 'react-native'
import AuthStore from './stores/auth'

class Home extends React.Component<{
  auth: AuthStore
}> {
  render() {
    return (
      <View style={{}}>
        <Text style={{}}>Welcome to Study Better!</Text>
        <Text>
          You are{this.props.auth.authenticated ? ' ' : ' not'}authenticated
        </Text>
      </View>
    )
  }
}

export default inject('auth')(observer(Home))
