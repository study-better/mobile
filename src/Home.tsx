import React from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, FlatList } from 'react-native'
import AuthStore from './stores/auth'
import ClassStore, { Class } from './stores/classes'
import AssignmentStore from './stores/assignments'
import { NavigationScreenProps } from 'react-navigation'
import Colors from './Colors'
import ClassCell from './components/ClassCell'
import Quote from 'inspirational-quotes'

const quote = Quote.getQuote()

class Home extends React.Component<{
  auth: AuthStore
  classes: ClassStore
  assignments: AssignmentStore
  navigation: any
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
          renderItem={({ item }) => (
            <ClassCell
              class={item}
              onPress={() => {
                this.props.navigation.navigate('ClassScreen', {
                  classId: item._id,
                  className: item.name,
                })
              }}
            />
          )}
        />
        <View
          style={{
            padding: 4,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>{quote.text}</Text>
          <Text>- {quote.author}</Text>
        </View>
      </View>
    )
  }
}

export default inject('auth', 'assignments', 'classes')(observer(Home))
