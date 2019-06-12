import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src'
import { name } from './app.json'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/auth'
import ClassStore from './src/stores/classes'
import KeyDateStore from './src/stores/keydates'

const stores = {
  auth: new AuthStore(),
  classes: new ClassStore(),
  keydates: new KeyDateStore(),
}

const App = () => (
  <Provider {...stores}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent(name, () => App)
