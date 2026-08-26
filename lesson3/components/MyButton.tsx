// rnfes
import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const MyButton = () => {
  const onPressFunction = () => {
    alert("You called a function!");
  };

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPressFunction}
      underlayColor={"red"}
    >
      <Text>MyButton</Text>
    </TouchableHighlight>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
