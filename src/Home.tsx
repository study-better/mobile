import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text } from 'react-native'
import AuthStore from './stores/auth'
import { NavigationScreenProps } from 'react-navigation'

class Home extends React.Component<{
  auth: AuthStore
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: 'Study Better',
  })

  render() {
    return (
      <View style={{ margin: 8 }}>
        <Text style={{}}>Welcome</Text>
        <Text>
          You are{this.props.auth.authenticated ? ' ' : ' not '}authenticated
        </Text>
      </View>
    )
  }
}

export default inject('auth')(observer(Home))
