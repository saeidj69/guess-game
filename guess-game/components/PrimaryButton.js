import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimaryButton({children}) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonTextColor}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:80,
        height:50,
        backgroundColor:"#7e57c2",
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:16,
       
    },

    buttonTextColor:{
        color:'white'
    }
})