import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const myAlertFn = () => {
    Alert.alert("title", "message", [
      { text: "Yes", onPress: () => console.log("Pressed yes") },
      { text: "No", onPress: () => console.log("Pressed no") },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Button title="Alert Button" onPress={myAlertFn} />
      </View>

      <TouchableHighlight
        onPress={() => alert("button pressed")}
        underlayColor="red"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => alert("boo!")}>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>Opacity</Text>
        </View>
      </TouchableOpacity>
      <Button title="button" onPress={() => alert("button pressed")}></Button>
      <Button
        title="button 2"
        onPress={() => console.log("button pressed")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderColor: "purple",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    borderColor: "purple",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
