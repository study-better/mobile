import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src'
import { name } from './app.json'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/auth'
import ClassStore from './src/stores/classes'
import AssignmentStore from './src/stores/assignments'

const stores = {
  auth: new AuthStore(),
  classes: new ClassStore(),
  assignments: new AssignmentStore(),
}

const App = () => (
  <Provider {...stores}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent(name, () => App)
