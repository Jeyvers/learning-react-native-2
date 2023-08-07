import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const TouchableElements = () => {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
    console.log(id);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* Flatlist can be better for performance because the items in the array do no load at once contrary to map, they load as the user scrolls the items into view   */}
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        // keyExtractor is not needed if the id is named as key
        keyExtractor={(item) => item.id}
        // Splits items into grids
        numColumns={2}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default TouchableElements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
    paddingHorizontal: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
