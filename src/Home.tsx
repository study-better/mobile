import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text } from 'react-native'
import AuthStore from './stores/auth'
import ClassStore, { Class } from './stores/classes'
import AssignmentStore from './stores/assignments'
import { NavigationScreenProps } from 'react-navigation'

class Home extends React.Component<{
  auth: AuthStore
  classes: ClassStore
  assignments: AssignmentStore
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: 'Study Better',
  })

  async componentDidMount() {
    await this.props.classes.load()
  }

  render() {
    return (
      <View style={{ margin: 8 }}>
        <Text style={{}}>Welcome</Text>
        {this.props.classes.feed.map((_class: Class) => (
          <View
            key={_class._id}
            style={{
              borderRadius: 10,
            }}
          >
            <Text>{_class.name}</Text>
          </View>
        ))}
      </View>
    )
  }
}

export default inject('auth', 'assignments', 'classes')(observer(Home))
