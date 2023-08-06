import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/game-screen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [roundCounter, setRoundCounter] = useState(0)
  const [fontLoaded] = useFonts({
    "iran-sanse": require("./assets/font/IRANSans_Medium.ttf"),
    "iran-sanse-bold": require("./assets/font/IRANSans_Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  const handleGameOver = (roundCount) => {
    setRoundCounter(roundCount)

    setIsGameOver(true);
  };
  const userPickedNumber = (pickedNumber) => {
    setUserInput(pickedNumber);
  };

  const resetGame = () => {
    setIsGameOver(false);
    setUserInput("");
  };

  const roundCount=(round)=>{
  }
  let screen = <StartGameScreen userPickedNumber={userPickedNumber} />;
  if (userInput)
    screen = <GameScreen pickedNumber={userInput} roundCount={roundCount} gameOver={handleGameOver} />;
  if (isGameOver)
    screen = <GameOverScreen pickedNumber={userInput} resetGame={resetGame} roundCounter={roundCounter}  />;
  return (
    <LinearGradient colors={["#b39ddb", "#ffeb3b"]} style={styles.conatiner}>
      <ImageBackground
        source={require("./assets/images/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.conatiner}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.conatiner}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
