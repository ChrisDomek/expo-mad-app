import { View, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import TodoItem from "../components/TodoItem";
import { loadTodos, saveTodos } from "../services/storage";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function HomeScreen({ navigation, route }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos((prev) => [...prev, route.params.newTodo]);
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

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My ToDo List" />
      <View style={styles.content}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              onToggle={toggleExpand}
              onFinish={markFinished}
              onDelete={deleteTodo}
            />
          )}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerUnderline} />
        <CustomButton
          label="Add New ToDo"
          icon="add-circle"
          onPress={() =>
            navigation.navigate("NewToDo", {
              addTodo: (todo) => setTodos((prev) => [...prev, todo]),
            })
          }
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
  content: {
    padding: 20,
    flex: 1,
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
