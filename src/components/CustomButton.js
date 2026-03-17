import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomButton = ({ label, onPress }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText} onPress={onPress}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;