import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function ButtonHandel({title ,onPressHandel,styleText,styleBtn}) {
  return (
   <TouchableOpacity onPress={onPressHandel} style={styleBtn}>
    <Text style={styleText}>{title&&title}</Text>
   </TouchableOpacity>
  )
}

export default ButtonHandel