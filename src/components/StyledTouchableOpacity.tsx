import React from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from '../Colors'

export default (props: any) => (
  <TouchableOpacity
    // Spread the props with `style` merged
    {...{
      ...props,
      style: Object.assign(
        {
          marginTop: 8,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          backgroundColor: Colors.black,
          color: Colors.white,
        },
        (props && props.style) || {}
      ),
    }}
  >
    {props.children}
  </TouchableOpacity>
)
