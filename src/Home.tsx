import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, FlatList } from 'react-native'
import AuthStore from './stores/auth'
import ClassStore, { Class } from './stores/classes'
import AssignmentStore from './stores/assignments'
import { NavigationScreenProps } from 'react-navigation'
import Colors from './Colors'
import ClassCell from './components/ClassCell'

class Home extends React.Component<{
  auth: AuthStore
  classes: ClassStore
  assignments: AssignmentStore
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: 'Classes',
  })

  async componentDidMount() {
    await this.props.classes.load()
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <FlatList
          data={this.props.classes.feed}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ClassCell class={item} />}
        />
        <View
          style={{
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.45)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>A motivational message</Text>
        </View>
      </View>
    )
  }
}

export default inject('auth', 'assignments', 'classes')(observer(Home))
