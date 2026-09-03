import { ImageBackground, StyleSheet, View } from "react-native";
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
      <View style={styles.header}></View>
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
  basicText: {
    color: colors.text.lightMain,
  },
  header: {
    backgroundColor: colors.RNBlack,
  },
});
