import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function TextInput() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText={(text) => setName(text)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 23"
        onChangeText={(text) => setAge(text)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    borderRadius: 12,
  },
});
