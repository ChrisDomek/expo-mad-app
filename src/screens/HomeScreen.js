import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation, route }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos((prevTodos) => [...prevTodos, route.params.newTodo]);
      navigation.setParams({ newTodo: undefined });
    }
  }, [route.params?.newTodo]);

  const toggleExpand = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, expanded: !todo.expanded } : todo,
    );
    setTodos(updated);
  };

  const markFinished = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, finished: true } : todo,
    );
    setTodos(updated);
  };

  const deleteToDo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title title="My ToDo List" />
        <View style={styles.underline} />
      </View>

      <View style={styles.content}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} {item.finished ? "(Completed)" : ""}</Text>
                <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                  <Ionicons
                    name={item.expanded ? "caret-up" : "caret-down"}
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              {item.expanded && (
                <>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.controls}>
                    {!item.finished && (
                      <Ionicons
                        name="checkmark-circle"
                        size={28}
                        color="green"
                        onPress={() => markFinished(item.id)}
                      />
                    )}
                    <Ionicons
                      name="trash"
                      size={28}
                      color="red"
                      onPress={() => deleteToDo(item.id)}
                    />
                  </View>
                </>
              )}
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerUnderline} />
        <CustomButton
          label="Add New ToDo"
          onPress={() => navigation.navigate("NewToDo")}
        />
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
  row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
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
    marginBottom: 10,
    backgroundColor: "#6cd4db",
    padding: 10,
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
  },
});
