import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.idTitle}>William Fremd H.S.</Text>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    borderWidth: 24,
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  titleBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  idTitle: {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 10,
  },
});
