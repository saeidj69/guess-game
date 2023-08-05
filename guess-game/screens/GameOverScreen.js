import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Color'
export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Is Over !!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

  text:{
    fontSize:28,
    color:Colors.primary700
  }
})