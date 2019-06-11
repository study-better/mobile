import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../Colors'
import { Class } from '../stores/classes'

export default class ClassCell extends React.Component<{
  class: Class
  navigation: any
  onPress: () => void
}> {
  render() {
    return (
      <TouchableOpacity
        key={this.props.class._id}
        style={{
          borderRadius: 4,
          backgroundColor: Colors.white,
          margin: 8,
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={this.props.onPress}
      >
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold' }}>{this.props.class.name}</Text>
          <View style={{ height: 4 }} />
          <Text>Assignment in 4 days</Text>
        </View>
        <Text>{`${this.props.class.completedAssignments}/${this.props.class.totalAssignments}`}</Text>
      </TouchableOpacity>
    )
  }
}
