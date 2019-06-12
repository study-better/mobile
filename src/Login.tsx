import React from 'react'
import { inject, observer } from 'mobx-react'
import AuthStore from './stores/auth'
import { View, Text } from 'react-native'
import Colors from './Colors'
import StyledTextInput from './components/StyledTextInput'
import StyledTouchableOpacity from './components/StyledTouchableOpacity'

class LoginScreen extends React.Component<{
  auth: AuthStore
  navigation: any
}> {
  state = {
    username: '',
    password: '',
  }

  onLoginPress = async () => {
    const { username, password } = this.state
    try {
      await this.props.auth.login(username, password)
      this.props.navigation.navigate('App')
    } catch (err) {
      alert('Error logging in', err)
    }
  }

  onSignupPress = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, padding: 8 }}>
        <Text>Username</Text>
        <StyledTextInput
          onChangeText={(username: any) => this.setState({ username })}
          value={this.state.username}
        />
        <Text>Password</Text>
        <StyledTextInput
          onChangeText={(password: any) => this.setState({ password })}
          secureTextEntry
          value={this.state.password}
        />
        <View style={{ flexDirection: 'row' }}>
          <StyledTouchableOpacity
            style={{ flex: 1, marginRight: 8 }}
            onPress={this.onSignupPress}
          >
            <Text style={{ color: Colors.white }}>Sign Up</Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            style={{ backgroundColor: Colors.blue, flex: 1 }}
            onPress={this.onLoginPress}
          >
            <Text style={{ color: Colors.white }}>Login</Text>
          </StyledTouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
        <Text style={{ fontSize: 9, color: Colors.black, alignSelf: 'center' }}>
          Study Better
        </Text>
      </View>
    )
  }
}

export default inject('auth')(observer(LoginScreen))
