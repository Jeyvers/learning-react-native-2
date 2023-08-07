import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/header";
import TodoItem from "../components/todoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          {/* flat list */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem pressHandler={pressHandler} item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
