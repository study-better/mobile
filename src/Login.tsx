import React from 'react'
import { inject, observer } from 'mobx-react'
import AuthStore from './stores/auth'
import { View, Text, TextInput, Keyboard } from 'react-native'
import Colors from './Colors'
import StyledTextInput from './components/StyledTextInput'
import StyledTouchableOpacity from './components/StyledTouchableOpacity'
import idx from 'idx'

class LoginScreen extends React.Component<{
  auth: AuthStore
  navigation: any
}> {
  state = {
    username: '',
    password: '',
  }

  usernameRef = React.createRef<typeof TextInput>()
  passwordRef = React.createRef<typeof TextInput>()

  componentDidMount() {
    if (this.usernameRef.current) this.usernameRef.current.focus()
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
          ref={this.usernameRef}
          autoCapitalize="none"
          onChangeText={(username: any) => this.setState({ username })}
          value={this.state.username}
          onSubmitEditing={() =>
            idx(this, (_) => _.passwordRef.current.focus())
          }
          returnKeyType="next"
        />
        <Text>Password</Text>
        <StyledTextInput
          ref={this.passwordRef}
          autoCapitalize="none"
          onChangeText={(password: any) => this.setState({ password })}
          secureTextEntry
          value={this.state.password}
          onSubmitEditing={async () => {
            Keyboard.dismiss()
            await this.onLoginPress()
          }}
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
