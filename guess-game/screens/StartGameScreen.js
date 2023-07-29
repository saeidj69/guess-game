import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputNumber}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 200,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#b39ddb",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginTop: 100,    
  },

  inputNumber: {
    borderColor: "#ffeb3b",
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fbc02d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
