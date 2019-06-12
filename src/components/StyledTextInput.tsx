import React from 'react'
import { TextInput } from 'react-native'
import Colors from '../Colors'

export default (
  props: React.ComponentProps<typeof TextInput> & { children?: any }
) => (
  <TextInput
    // Spread the props with `style` merged
    {...{
      ...props,
      style: Object.assign(
        {
          height: 50,
          borderRadius: 3,
          borderColor: Colors.black,
          borderWidth: 3,
          padding: 8,
        },
        (props && props.style) || {}
      ),
    }}
  >
    {props.children}
  </TextInput>
)
