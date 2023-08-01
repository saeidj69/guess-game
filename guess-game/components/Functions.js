import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Functions() {
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
  return (
    <View>
      <Text>Functions</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
