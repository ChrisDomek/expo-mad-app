import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ item, onToggle, onFinish, onDelete }) {
  return (
    <View style={styles.task}>
      <View style={styles.row}>
        <Text style={styles.title}>
          {item.title} {item.finished ? "(Completed)" : ""}
        </Text>
        <TouchableOpacity onPress={() => onToggle(item.id)}>
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
                onPress={() => onFinish(item.id)}
              />
            )}
            <Ionicons
              name="trash"
              size={28}
              color="red"
              onPress={() => onDelete(item.id)}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#6cd4db",
  },
    row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
    title: {
    fontSize: 18,
    fontWeight: "bold",
    },
    description: {
    marginTop: 5,
    fontSize: 16,
    },
    controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    },
});
