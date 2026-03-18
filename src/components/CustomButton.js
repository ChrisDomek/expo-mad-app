import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ label, onPress }) => {
  return (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;