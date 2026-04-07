import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({ label, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        {icon && (
          <Ionicons name={icon} size={20} style={styles.icon} />
        )}
        <Text style={styles.buttonText}>{label}</Text>
      </View>
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
    width: "45%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    color: "#0cdf6b",
  },
});

export default CustomButton;
