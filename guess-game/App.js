import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/game-screen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen"
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [isGameOver, setIsGameOver] = useState(false)
  const handleGameOver=()=>{
    setIsGameOver(true)
  }
  const userPickedNumber = (pickedNumber) => {
    setUserInput(pickedNumber);
  };
  let screen = <StartGameScreen userPickedNumber={userPickedNumber} />;
  if (userInput) screen = <GameScreen pickedNumber={userInput} gameOver={handleGameOver} />;
  if(isGameOver) screen=<GameOverScreen />
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
