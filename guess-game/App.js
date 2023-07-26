import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <View style={styles.conatiner}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 16,
  },
});
