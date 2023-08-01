import React, { useState } from "react";
import { StyleSheet, Alert, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constant/Color";
export default function StartGameScreen({userPickedNumber}) {
  const [userNumber, setuserNumber] = useState("");
  const resetUserNumber = () => {
    setuserNumber("");
  };

  const handleConfirmButton = () => {
    const enteredNumber = parseInt(userNumber);
    if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 99) {
      Alert.alert("Invalid Number", "Number Must be between 1 and 99 ", [
        { text: "okey", style: "destructive", onPress: resetUserNumber },
      ]);

      return;
    }
    userPickedNumber(userNumber)
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputNumber}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        onChangeText={(number) => setuserNumber(number)}
        value={userNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetUserNumber}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirmButton}>Confirm</PrimaryButton>
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
    backgroundColor:Colors.primary500 ,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginTop: 100,
  },

  inputNumber: {
    borderColor: Colors.secondary500,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color:Colors.secondary600 ,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
