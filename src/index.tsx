import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import AuthLoading from './AuthLoading'
import Login from './Login'
import HomeScreen from './Home'
import ClassScreen from './Class'

const stack = createStackNavigator(
  {
    HomeScreen,
    ClassScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
)

const _switch = createSwitchNavigator(
  {
    App: stack,
    Auth: Login,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default createAppContainer(_switch)
