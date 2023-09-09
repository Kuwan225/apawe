import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, { ReactNode } from 'react'

interface TProps{
    label:ReactNode
}

const Button = (props:TProps) => {

    const {label} = props

  return (
  <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={()=>{}}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        height:45,
        backgroundColor:"#0AE1EF",
        borderRadius:45,
    },
    text:{
        fontSize:20,
        textAlign:"center",
        lineHeight:45,
        color:"black"
    }
})