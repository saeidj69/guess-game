import { StyleSheet, Alert, View } from "react-native";
import React, { useState } from "react";
import Button from "../../components/PrimaryButton";

export default function GameControllers({ generateSystemGuess }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const HigherControll = () => {
    setMax(50);
    Alert.alert(`max:${max}`);

    generateSystemGuess(min, max);
  };
  const LowerControll = () => {
    setMin(10);
    Alert.alert(`min:${min}`);

    generateSystemGuess(min, max);
  };
  return (
    <View style={styles.buttonContainer}>
      <Button onPress={HigherControll}>Higher</Button>
      <Button onPress={LowerControll}>Lower</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
   