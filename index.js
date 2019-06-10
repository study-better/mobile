import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src'
import { name } from './app.json'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/auth'

const stores = {
  auth: new AuthStore(),
}

const App = () => (
  <Provider {...stores}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent(name, () => App)
