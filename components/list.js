import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const List = () => {
  return (
    <View style={{ flex: 1,}}>
      <Text style={{ fontSize: 15, padding: 10, alignItems: "center" }}>Todo List</Text>
      <Message name="Homework"  />
      <Message name="Grocery" />
      <Message name="Cleaning" />
      <Message name="Workout" />
      <Message name="Go to event" />

    </View>
  );
};

export default List;

const Message = (items) => {
  return (

    <TouchableOpacity 
    onPress={() => alert("Complete the task!" )}
    style={{ backgroundColor: "lightblue", margin: 5, width: 150, height: 20 }}>
      <Text>
        List: {items.name}
      </Text>
    </TouchableOpacity>

  );
};