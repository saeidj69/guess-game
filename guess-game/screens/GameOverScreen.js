import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../constant/Color";
import PrimaryButton from "../components/PrimaryButton";
export default function GameOverScreen({
  roundCounter,
  pickedNumber,
  resetGame,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Is Over !</Text>
      <View>
        <Text style={styles.summaryTexts}>
          Your Phone Needed <Text style={styles.hilight}>{roundCounter}</Text>{" "}
          round to guess the number{" "}
          <Text style={styles.hilight}>{pickedNumber}</Text>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button} onPress={resetGame}>
          Reset Game
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    color: Colors.primary700,
    fontFamily: "iran-sanse-bold",
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary500,
    marginTop: 16,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  summaryTexts: {
    fontFamily: "iran-sanse",
    fontSize: 22,
    marginVertical: 16,
    color: Colors.primary700,
    textAlign: "center",
  },

  hilight: {
    color: Colors.secondary500,
    fontFamily: "iran-sanse-bold",
  },
  buttonContainer: {
    marginVertical: 16,
  },
  button: {
    width: "100%",
  },
});
