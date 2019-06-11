import { createStackNavigator, createAppContainer } from 'react-navigation'
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

export default createAppContainer(stack)
