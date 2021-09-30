import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress, color = "tomato" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    borderRadius: 15,
    marginVertical: 5,
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "yekan",
    fontSize: 15,
  },
});
