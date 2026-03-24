import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title title="My ToDo List" />
        <View style={styles.underline} />
      </View>

      <View style={styles.content}>
        <Text style={styles.task}>Buy Milk</Text>
        <Text style={styles.task}>Buy Bread</Text>
        <Text style={styles.task}>Buy Eggs</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerUnderline} />
        <CustomButton label="Add New ToDo" onPress={() => navigation.navigate("NewToDo")}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6c5d1",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
  },
  underline: {
    width: "100%",
    height: 4,
    backgroundColor: "#000000",
  },
  content: {
    padding: 20,
    flex: 1,
  },
  task: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: "#6cd4db",
    alignItems: "center",
    padding: 6,
    borderRadius: 5,
  },
  footerUnderline: {
    width: "100%",
    height: 1,
    backgroundColor: "#000000",
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginBottom: 10,
  }
});
