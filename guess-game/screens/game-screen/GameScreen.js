import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Colors from "../../constant/Color";
import Controllers from "./GameControllers";
import Button from "../../components/PrimaryButton";

function generateSystemGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let minBoundry = 1;
let maxBoundry = 100;
export default function GameScreen({ pickedNumber, gameOver }) {
  const initialGuess = generateSystemGuess(minBoundry, maxBoundry);
  const [systemGuess, setSystemGuess] = useState(initialGuess);

  const generateNewGuess = (direction) => {
    if (direction == "lower") {
      if (systemGuess > pickedNumber) {
        Alert.alert("Wrong Answer", "Yo Say lie", [
          { text: "sotty!", style: "cancel" },
        ]);
      } else {
        minBoundry = systemGuess;
        maxBoundry = maxBoundry;

        setSystemGuess(generateSystemGuess(minBoundry, maxBoundry));
      }
    } else {
      if (systemGuess < pickedNumber) {
        Alert.alert("Wrong Answer", "Yo Say lie", [
          { text: "sotty!", style: "cancel" },
        ]);
      } else {
        maxBoundry = systemGuess;
        minBoundry = minBoundry;

        setSystemGuess(generateSystemGuess(minBoundry, maxBoundry));
      }
    }
  };
  useEffect(() => {
    if (pickedNumber == systemGuess) gameOver();
  }, [systemGuess]);
  useEffect(() => {
    if (pickedNumber == systemGuess) gameOver();
  }, [systemGuess]);

  return (
    <View style={styles.container}>
      <Title systemGuess={systemGuess}>System Guess</Title>
      <View style={styles.actionContainer}>
        <Text style={styles.centerText}>Is Higher Or Lower</Text>
        {/* <Controllers generateSystemGuess={generateSystemGuess} /> */}

        <View style={styles.buttonContainer}>
          <Button onPress={generateNewGuess.bind(this, "higher")}>
            <Text>Higher</Text>
          </Button>
          <Button onPress={generateNewGuess.bind(this, "lower")}>
            <Text>Lower</Text>
          </Button>
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
