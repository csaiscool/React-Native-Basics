import { StyleSheet, Text, View } from "react-native";
// import components provided by RN

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mobile Apps</Text>
      <Text style={styles.bodyText}>Sathvik Loka</Text>
    </View>
  );
}

// rnss
// within styles you define styles you want for this page
const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    color: "#00F0FF",
    fontWeight: "bold",
  },
  bodyText: {
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "purple",
    borderWidth: 20,
  },
});
