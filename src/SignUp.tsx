import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text } from 'react-native'
import AuthStore from './stores/auth'
import StyledTextInput from './components/StyledTextInput'
import StyledTouchableOpacity from './components/StyledTouchableOpacity'
import Colors from './Colors'

class SignUpScreen extends React.Component<{
  auth: AuthStore
  navigation: any
}> {
  state = {
    username: '',
    password: '',
    passwordConfirm: '',
  }

  onLeftButtonPress = async () => {
    this.props.navigation.navigate('LoginScreen')
  }

  onRightButtonPress = async () => {
    try {
      if (this.state.password !== this.state.passwordConfirm) {
        alert('Passwords do not match')
        return
      }
      const { username, password } = this.state
      await this.props.auth.createUser(username, password)
      this.props.navigation.navigate('App')
    } catch (err) {
      alert('There was a problem signing up', err)
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, padding: 8 }}>
        <Text>Username</Text>
        <StyledTextInput
          onChangeText={(username: string) => this.setState({ username })}
          value={this.state.username}
        />
        <Text>Password</Text>
        <StyledTextInput
          onChangeText={(password: string) => this.setState({ password })}
          secureTextEntry
          value={this.state.password}
        />
        <Text>Confirm</Text>
        <StyledTextInput
          onChangeText={(passwordConfirm: string) =>
            this.setState({ passwordConfirm })
          }
          secureTextEntry
          value={this.state.passwordConfirm}
        />
        <View style={{ flexDirection: 'row' }}>
          <StyledTouchableOpacity
            style={{ flex: 1, marginRight: 8 }}
            onPress={this.onLeftButtonPress}
          >
            <Text style={{ color: Colors.white }}>Login</Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            style={{ flex: 1, backgroundColor: Colors.blue }}
            onPress={this.onRightButtonPress}
          >
            <Text style={{ color: Colors.white }}>Sign Up</Text>
          </StyledTouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
        <Text style={{ fontSize: 9, color: Colors.black, alignSelf: 'center' }}>
          Welcome
        </Text>
      </View>
    )
  }
}

export default inject('auth')(observer(SignUpScreen))