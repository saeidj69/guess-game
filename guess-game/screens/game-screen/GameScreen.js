import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
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
  const [roundCount, setRoundCount] = useState(1)
  const generateNewGuess = (direction) => {
    setRoundCount(roundCount=>roundCount+1)
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
    if (pickedNumber == systemGuess) {
      Alert.alert(`Your Guess Is:${pickedNumber}`);
      gameOver(roundCount);
    }
  }, [systemGuess]);

  return (
    <View style={styles.container}>
      <Title systemGuess={systemGuess}> حدس سیستم</Title>
      <View style={styles.actionContainer}>
        <Text style={styles.centerText}>Is Higher Or Lower</Text>
        {/* <Controllers generateSystemGuess={generateSystemGuess} /> */}

        <View style={styles.buttonContainer}>
          <Button onPress={generateNewGuess.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </Button>
          <Button onPress={generateNewGuess.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  centerText: {
    textAlign: "center",
    color: Colors.secondary600,
    fontSize: 16,
    //fontWeight: "500",
    fontFamily: "iran-sanse",
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
