import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const TodoApp = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          {/* flat list */}
          <FlatList data={[]} />
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
});
