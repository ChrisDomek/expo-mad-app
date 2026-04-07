import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTodos = async () => {
  try {
    const data = await AsyncStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error loading todos", error);
    return [];
  }
};

export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.log("Error saving todos", error);
  }
};