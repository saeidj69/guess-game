import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../components/Title";
import Colors from "../../constant/Color";
import Button from "../../components/PrimaryButton";

function generateSystemGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let minBoundry = 1;
let maxBoundry = 100;
export default function GameScreen({ pickedNumber, gameOver }) {
  const initialGuess = generateSystemGuess(minBoundry, maxBoundry);
  const [systemGuess, setSystemGuess] = useState(initialGuess);
  const [roundCount, setRoundCount] = useState(1);
  const [guesList, setGuesList] = useState([]);
  const generateNewGuess = (direction) => {
    setRoundCount((roundCount) => roundCount + 1);
    if (direction == "lower") {
      if (systemGuess > pickedNumber) {
        Alert.alert("Wrong Answer", "Yo Say lie", [
          { text: "sotty!", style: "cancel" },
        ]);
      } else {
        minBoundry = systemGuess;
        maxBoundry = maxBoundry;
        let newGuess = generateSystemGuess(minBoundry, maxBoundry);
        setSystemGuess(newGuess);
        setGuesList((prevGeuss) => [
          ...prevGeuss,
          { id: Math.random().toString(), title: newGuess },
        ]);
      }
    } else {
      if (systemGuess < pickedNumber) {
        Alert.alert("Wrong Answer", "Yo Say lie", [
          { text: "sotty!", style: "cancel" },
        ]);
      } else {
        maxBoundry = systemGuess;
        minBoundry = minBoundry;
        let newGuess = generateSystemGuess(minBoundry, maxBoundry);

        setSystemGuess(newGuess);
        setGuesList((prevGeuss) => [
          ...prevGeuss,
          { id: Math.random().toString(), title: newGuess },
        ]);
      }
    }
  };
  useEffect(() => {
    if (pickedNumber == systemGuess) {
      Alert.alert(`Your Guess Is:${pickedNumber}`);
      gameOver(roundCount);
    }
  }, [systemGuess]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  return (
    <View>
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
      
        {/* {guesList.map((guess) => (
          <Text key={guess.id}>{guess.title}</Text>
        ))} */}
        <FlatList
          data={guesList}
          renderItem={({ item }) => {
            return (
              <View style={styles.guessListContainer}>
                <Text style={styles.guessItem}>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      
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
  guessListContainer:{
    justifyContent:"center",
    alignItems:"center"
  },

  guessItem:{
    backgroundColor:Colors.secondary600,
    color:"white",
    fontFamily:"iran-sanse-bold",
    fontSize:16,
    borderRadius:50,
    padding:8,
    marginVertical:16
    
  }
});
