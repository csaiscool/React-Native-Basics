// rnfes
import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

// declare datatype for the props we will send in for this component
// this datatype really only applies to this component
// if datatype would be used in other places, define and import separately

// the name is generic because only declaring type of props used here
type propsType = {
  text: string; //required prop
  color?: string; // ? means optional
  backgroundColor?: string;
  fontSize?: number;
  onPress: () => void;
};

// declare myButton uses type propsType to send needed info
// destructure props to make using prop values easier
// curly braces go in parentheses for this
const MyButton: React.FC<propsType> = ({
  text,
  color = "purple",
  backgroundColor = "lavender",
  fontSize = 15,
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        { backgroundColor: backgroundColor, borderColor: color },
      ]}
      onPress={onPress}
      underlayColor={"salmon"}
    >
      <Text style={[styles.buttonText, { color: color, fontSize: fontSize }]}>
        {text}
      </Text>
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
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
