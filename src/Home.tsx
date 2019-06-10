import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text } from 'react-native'

@inject()
@observer
export default class Home extends React.Component<{}> {
  render() {
    return (
      <View style={{}}>
        <Text style={{}}>Welcome to Study Better!</Text>
      </View>
    )
  }
}
