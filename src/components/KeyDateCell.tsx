import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../Colors'
import { KeyDate } from '../stores/keydates'
import moment from 'moment'

export default class KeyDateCell extends React.Component<{
  keyDate: KeyDate
}> {
  render() {
    const dueDiff = moment(this.props.keyDate.dueDate).diff(moment(), 'days')
    return (
      <TouchableOpacity
        key={this.props.assignment._id}
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
          <Text style={{ fontWeight: 'bold' }}>
            {this.props.assignment.name}
          </Text>
          <Text>
            {dueDiff > 0
              ? `Due in ${dueDiff} day${dueDiff === 1 ? '' : 's'}`
              : `Due ${dueDiff * -1} day${dueDiff === -1 ? '' : 's'} ago`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
