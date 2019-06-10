import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'

const stack = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(stack)
