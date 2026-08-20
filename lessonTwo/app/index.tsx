import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.darkGrey}>
        <View style={styles.rowOfSquares}>
          <View style={styles.redBox}>
            <Text style={styles.numbers}>1</Text>
          </View>
          <View style={styles.redBox}>
            <Text style={styles.numbers}>2</Text>
          </View>
          <View style={styles.redBox}>
            <Text style={styles.numbers}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.darkGreen}>
        <View style={styles.colOfRectangles}>
          <View style={styles.lightGreenSquare}></View>
          <View style={styles.lightGreenSquare}></View>
          <View style={styles.lightGreenSquare}></View>
        </View>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  colOfRectangles: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowOfSquares: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkGrey: {
    backgroundColor: "gray",
    flex: 1,
    width: "20%",
    marginBottom: 20,
    alignItems: "center",
  },
  darkGreen: {
    backgroundColor: "darkgreen",
    flex: 4,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    backgroundColor: "red",
    marginTop: 30,
    margin: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  numbers: {
    fontSize: 25,
    fontWeight: "bold",
  },
  lightGreenSquare: {
    backgroundColor: "lightgreen",
    margin: 10,
    width: 250,
    height: 50,
  },
});
