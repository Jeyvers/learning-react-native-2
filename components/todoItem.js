import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={20} color="#222" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
