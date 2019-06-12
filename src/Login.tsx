import React from 'react'
import { inject, observer } from 'mobx-react'
import AuthStore from './stores/auth'
import { View, Text } from 'react-native'

class LoginScreen extends React.Component<{
  auth: AuthStore
}> {
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }
}

export default inject('auth')(observer(LoginScreen))
