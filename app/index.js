import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
import Sandbox from "../components/sandbox";

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

  const submitHandler = (text) => {
    if (text.length < 3) {
      // Calling the alert method on the alert object
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text, key: Math.random().toString() },
      ]);
    }
  };

  return (
    <>
      {/*  <Sandbox /> */}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          {/* header */}
          <Header />
          <View style={styles.content}>
            {/* todo form */}
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              {/* flat list */}
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem pressHandler={pressHandler} item={item} />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
