import { AppRegistry } from 'react-native'
import Navigator from './src'
import { name } from './app.json'
import React from 'react'
import { Provider } from 'mobx-react'

const stores = {}

class App extends React.Component {
  render() {
    return (
      <Provider stores>
        <Navigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(name, () => App)
