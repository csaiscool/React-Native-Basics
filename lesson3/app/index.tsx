import MyButton from "@/components/MyButton";
import {
  Alert,
  Button,
  Image,
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
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <View>
        <Button title="Alert Button" onPress={myAlertFn} />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/fantasy/puka.png")}
      />
      <Image
        style={styles.image}
        source={require("../assets/images/fantasy/hurts.png")}
      />
      <Image
        style={styles.image}
        source={require("../assets/images/fantasy/saquon.png")}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      />

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
  image: {
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: "#87CEEB",
    borderRadius: 35,
  },
  image2: {
    height: 200,
    width: 200,
    borderWidth: 10,
    borderColor: "#87CEEB",
    borderRadius: 100,
  },
});
