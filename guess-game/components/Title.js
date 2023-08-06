import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constant/Color";

export default function Title({ children, systemGuess }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
      <Text style={styles.title}>{systemGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 2,
    borderColor: Colors.secondary500,
    paddingTop: 16,
    justifyContent:"center",
    
  },
  title: {
    fontSize: 24,
    //fontWeight: "700",
    fontFamily:"iran-sanse-bold",
    color: Colors.secondary600,
    textAlign:"center"
  },

});
