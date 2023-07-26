import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

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
        android_ripple={{ color: "#4527a0" }}
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
    overflow: "hidden",
  },
  buttonInnerContainer: {
    width: 70,
    height: 40,
    backgroundColor: "#7e57c2",
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
