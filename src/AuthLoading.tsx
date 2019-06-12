import React from 'react'
import { View } from 'react-native'
import { inject, observer } from 'mobx-react'
import AuthStore from './stores/auth'

class AuthLoading extends React.Component<{
  auth: AuthStore
  navigation: any
}> {
  async componentDidMount() {
    await this.props.auth.loadStoredAuth()
    console.log(this.props.auth)
    if (this.props.auth.authenticated) {
      this.props.navigation.navigate('App')
    } else {
      this.props.navigation.navigate('Auth')
    }
  }
  render() {
    return <View />
  }
}

export default inject('auth')(observer(AuthLoading))
