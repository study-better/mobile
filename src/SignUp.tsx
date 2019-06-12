import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, TextInput, Keyboard } from 'react-native'
import AuthStore from './stores/auth'
import StyledTextInput from './components/StyledTextInput'
import StyledTouchableOpacity from './components/StyledTouchableOpacity'
import Colors from './Colors'
import idx from 'idx'

class SignUpScreen extends React.Component<{
  auth: AuthStore
  navigation: any
}> {
  state = {
    username: '',
    password: '',
    passwordConfirm: '',
  }

  usernameRef = React.createRef<typeof TextInput>()
  passwordRef = React.createRef<typeof TextInput>()
  passwordConfirmRef = React.createRef<typeof TextInput>()

  componentDidMount() {
    setTimeout(() => {
      if (this.usernameRef.current) this.usernameRef.current.focus()
    }, 500)
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
          ref={this.usernameRef}
          autoCapitalize="none"
          onChangeText={(username: string) => this.setState({ username })}
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
          onChangeText={(password: string) => this.setState({ password })}
          secureTextEntry
          value={this.state.password}
          onSubmitEditing={() =>
            idx(this, (_) => _.passwordConfirmRef.current.focus())
          }
          returnKeyType="next"
        />
        <Text>Confirm</Text>
        <StyledTextInput
          ref={this.passwordConfirmRef}
          autoCapitalize="none"
          onChangeText={(passwordConfirm: string) =>
            this.setState({ passwordConfirm })
          }
          secureTextEntry
          value={this.state.passwordConfirm}
          onSubmitEditing={async () => {
            Keyboard.dismiss()
            await this.onRightButtonPress()
          }}
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
