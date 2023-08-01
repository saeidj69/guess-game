import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Colors from "../constant/Color";
import Button from "../components/PrimaryButton";
export default function GameScreen({ pickedNumber }) {
  const [systemGuess, setSystemGuess] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const generateSystemGuess = (min, max) => {
    setSystemGuess(Math.floor(Math.random() * (max - min + 1) + min));
    if (systemGuess == pickedNumber) alert("find number");
  };

  const HigherGuess = () => {
    debugger
    setMax(prevState,systemGuess);
    alert(max);
    generateSystemGuess(min, max);
  };
  const LowerGuess = () => {
    debugger
    setMin(systemGuess);
    alert(min);
    generateSystemGuess(min, max);
  };



  useEffect(() => {
    generateSystemGuess(min, max);
  }, []);
  return (
    <View style={styles.container}>
      <Title systemGuess={systemGuess}>System Guess</Title>
      <View style={styles.actionContainer}>
        <Text style={styles.centerText}>Is Higher Or Lower</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={HigherGuess}>Higher</Button>
          <Button onPress={LowerGuess}>Lower</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  centerText: {
    textAlign: "center",
    color: Colors.secondary600,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
  },
  actionContainer: {
    backgroundColor: Colors.primary500,
    marginTop: 16,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
