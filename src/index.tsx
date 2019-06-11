import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Home'
import ClassScreen from './Class'
import Colors from './Colors'

const stack = createStackNavigator(
  {
    HomeScreen,
    ClassScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
    },
  }
)

export default createAppContainer(stack)
