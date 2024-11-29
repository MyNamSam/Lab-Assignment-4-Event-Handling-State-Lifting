
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heading = () => {
  return (
    <View style={styles.bar} >
      <Text style={styles.text}>Incredible Todo List App</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "gray",
    padding: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
