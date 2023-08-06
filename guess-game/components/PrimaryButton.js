import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../constant/Color";
export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color:Colors.primary600  }}
      >
        <Text style={styles.buttonTextColor}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical:16,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    width: 100,
    height: 40,
    backgroundColor:Colors.primary700 ,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 4,
    elevation: 4,
  },

  buttonTextColor: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
