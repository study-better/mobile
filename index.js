import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src'
import { name } from './app.json'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/auth'
import ClassStore from './src/stores/classes'
import KeyDateStore from './src/stores/keydates'
import axios from 'axios'

axios.defaults.baseUrl = 'https://backend.study-better.now.sh'
axios.default.baseUrl = 'http://localhost:4000'
axios.defaults.headers['content-type'] = 'application/json'

const stores = {
  auth: new AuthStore(),
  classes: new ClassStore(),
  keyDates: new KeyDateStore(),
}

const App = () => (
  <Provider {...stores}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent(name, () => App)
