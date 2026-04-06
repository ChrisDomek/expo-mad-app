import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import { useState } from "react";

export default function NewToDo({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlSave = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert("Invalid Input", "Both Title and Description are required.");
      return;
    }

    const newToDo = {
      id: Date.now().toString() + Math.random().toString(),
      title,
      description,
      finished: false,
      expanded: false,
    };

    navigation.navigate("Home", { newTodo: newToDo });

    Alert.alert("Success", "ToDo Added Successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title title="My ToDo List" />
        <View style={styles.underline} />
      </View>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        style={[styles.input, styles.description]}
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <CustomButton label="Back" onPress={() => navigation.goBack()} />
        <CustomButton label="Save" onPress={handlSave} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#c6c5d1",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
    fontSize: 16,
  },
  description: {
    height: 100,
    textAlignVertical: "top",
  },
  header: {
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
});
