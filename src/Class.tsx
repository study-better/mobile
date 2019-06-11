import React from 'react'
import { View, Text } from 'react-native'
import { inject, observer } from 'mobx-react'
import { NavigationScreenProps } from 'react-navigation'
import Colors from './Colors'
import ClassStore from './stores/classes'
import AssignmentStore from './stores/assignments'

class ClassScreen extends React.Component<{
  classes: ClassStore
  assignments: AssignmentStore
  navigation: any
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: navigation.getParam('className', 'Class'),
  })

  render() {
    const classId = this.props.navigation.getParam('classId')
    const _class = this.props.classes.byId(classId)
    return (
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <View>
          <Text>{_class.name}</Text>
        </View>
      </View>
    )
  }
}

export default inject('classes', 'assignments')(observer(ClassScreen))
