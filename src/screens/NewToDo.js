import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

export default function NewToDo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title title="My ToDo List" />
        <View style={styles.underline} />
      </View>
      <TextInput placeholder="Title" style={styles.input} />
      <TextInput
        placeholder="Description"
        style={[styles.input, styles.description]}
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.buttonContainer}>
        <CustomButton label="Cancel" onPress={() => navigation.goBack()} />
        <CustomButton label="Save" onPress={() => {}} />
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
