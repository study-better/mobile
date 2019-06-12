import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import { NavigationScreenProps } from 'react-navigation'
import Colors from './Colors'
import ClassStore from './stores/classes'
import KeyDateStore from './stores/keydates'
import KeyDateCell from './components/KeyDateCell'

class ClassScreen extends React.Component<{
  classes: ClassStore
  keyDates: KeyDateStore
  navigation: any
}> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: navigation.getParam('className', 'Class'),
  })

  async componentDidMount() {
    const classId = this.props.navigation.getParam('classId')
    await this.props.keyDates.loadByClassId(classId)
  }

  render() {
    const classId = this.props.navigation.getParam('classId')
    const keyDates = this.props.keyDates.byClassId(classId)
    return (
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <FlatList
          data={keyDates}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <KeyDateCell keyDate={item} />}
        />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              alignItems: 'center',
              padding: 8,
            }}
          >
            <Text>Add Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              alignItems: 'center',
              padding: 8,
            }}
          >
            <Text>Add Due Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default inject('classes', 'keyDates')(observer(ClassScreen))
