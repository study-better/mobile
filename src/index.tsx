import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import AuthLoading from './AuthLoading'
import LoginScreen from './Login'
import SignUpScreen from './SignUp'
import HomeScreen from './Home'
import ClassScreen from './Class'

const AppStack = createStackNavigator(
  {
    HomeScreen,
    ClassScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
)

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    SignUpScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
)

const _switch = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default createAppContainer(_switch)
