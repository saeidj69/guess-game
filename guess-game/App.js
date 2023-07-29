import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#b39ddb", "#ffeb3b"]} style={styles.conatiner}>
      <ImageBackground
        source={require("./assets/images/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.conatiner}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems:"center",    
    width:"100%"
    
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
