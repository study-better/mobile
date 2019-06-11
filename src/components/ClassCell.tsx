import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../Colors'
import { Class } from '../stores/classes'

export default class ClassCell extends React.Component<{
  class: Class
}> {
  render() {
    return (
      <View
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
      >
        <View style={{ justifyContent: 'space-between' }}>
          <Text>{this.props.class.name}</Text>
          <View style={{ height: 4 }} />
          <Text>Assignment in 4 days</Text>
        </View>
        <Text>{`${this.props.class.completedAssignments}/${this.props.class.totalAssignments}`}</Text>
      </View>
    )
  }
}
