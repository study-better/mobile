import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import { NavigationScreenProps } from 'react-navigation'
import Colors from './Colors'
import ClassStore from './stores/classes'
import AssignmentStore from './stores/assignments'
import AssignmentCell from './components/AssignmentCell'

class ClassScreen extends React.Component<{
  classes: ClassStore
  assignments: AssignmentStore
  navigation: any
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: navigation.getParam('className', 'Class'),
    headerRight: (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.black,
          margin: 8,
          padding: 8,
          borderRadius: 3,
        }}
        onPress={() => alert('Add assignment')}
      >
        <Text style={{ color: Colors.white }}>Add Assignment</Text>
      </TouchableOpacity>
    ),
  })

  async componentDidMount() {
    const classId = this.props.navigation.getParam('classId')
    await this.props.assignments.loadByClassId(classId)
  }

  render() {
    const classId = this.props.navigation.getParam('classId')
    const assignments = this.props.assignments.byClassId(classId)
    return (
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <FlatList
          data={assignments}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <AssignmentCell assignment={item} />}
        />
      </View>
    )
  }
}

export default inject('classes', 'assignments')(observer(ClassScreen))
