import Fontisto from "@expo/vector-icons/Fontisto";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "./styles/colors";
export default function Index() {
  const localImage = require("../assets/images/ReactNativebg.jpg"); // grabs image from path stated
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.header}>
        <Fontisto
          name="react"
          size={40}
          color="lightblue"
          style={{ marginTop: 12, marginLeft: 50 }}
        />
        <Text style={styles.title}>React Native</Text>
        <View style={{ width: 450 }}></View>
        <Text style={styles.basicText}>Docs</Text>
        <Text style={styles.basicText}>Releases</Text>
        <Text style={styles.basicText}>Contributing</Text>
        <Text style={styles.basicText}>Community</Text>
        <Text style={styles.basicText}>Showcase</Text>
        <Text style={styles.basicText}>Blog</Text>
      </View>
      <ImageBackground //uses ImageBackground import from React Native to make an Image Background
        source={localImage} //accesses the background image chosen
        resizeMode="cover"
        style={styles.backgroundImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    color: colors.text.dark,
    fontWeight: "bold",
    fontSize: 25,
    margin: 15,
  },
  basicText: {
    color: colors.text.dark,
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
    marginTop: 22,
  },
  header: {
    backgroundColor: colors.RNBlack,
    height: 90,
    width: "100%",
    padding: 70,
    flexDirection: "row",
  },
});
