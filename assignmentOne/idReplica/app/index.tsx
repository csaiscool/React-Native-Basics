import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.idTitle}>William Fremd H.S.</Text>
      </View>

      <View style={styles.topInfoRow}>
        <Text style={styles.basicInfo}>Township High School D211</Text>
        <Text style={styles.basicInfo}>Grade 11</Text>
      </View>

      <View style={styles.leftContentColumn}>
        <View style={styles.nameBlock}>
          <Text style={styles.boldedInfo}>Kadiyala,</Text>
          <Text style={styles.boldedInfo}>Siddharth</Text>
        </View>

        <View style={styles.classInfoBlock}>
          <Text style={styles.mediumInfo}>02 Clement, N</Text>
          <Text style={styles.mediumInfo}>C- Tosh, T</Text>
        </View>

        <View style={styles.busRow}>
          <View style={styles.greenBox}>
            <Text style={styles.greenBoxText}>26-27</Text>
          </View>
          <View style={styles.busTextContainer}>
            <Text style={styles.boldedBusLabel}>Bus:</Text>
            <Text style={styles.boldedBusValue}>OFF Campus</Text>
          </View>
        </View>
      </View>

      <View style={styles.idCircle}>
        <Image source={sidPic}></Image>
      </View>

      <View style={styles.qrCodeBox}>
        <View style={styles.qrCodeRectangleT1}></View>
        <View style={styles.qrCodeRectangleT2}></View>
        <View style={styles.qrCodeRectangleT1}></View>
        <View style={styles.qrCodeRectangleT2}></View>
        <View style={styles.qrCodeRectangleT1}></View>
        <View style={styles.qrCodeRectangleT2}></View>
      </View>
    </View>
  );
}
const sidPic = require("../assets/images/sidpic.jpg");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7f7f7f",
    borderWidth: 16,
    borderColor: "black",
    borderRadius: 12,
    height: "100%",
    width: "100%",
  },
  titleBox: {
    alignItems: "center",
    marginTop: 8,
  },
  idTitle: {
    fontSize: 44,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
  },
  topInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  basicInfo: {
    fontSize: 22,
    color: "black",
  },
  leftContentColumn: {
    marginLeft: 20,
    marginTop: 15,
  },
  nameBlock: {
    marginBottom: 4,
  },
  boldedInfo: {
    fontSize: 46,
    fontWeight: "bold",
    color: "black",
    lineHeight: 50, //forces line spacing
  },
  classInfoBlock: {
    marginBottom: 20,
  },
  mediumInfo: {
    fontSize: 24,
    color: "black",
    lineHeight: 28, //forces line spacing
  },
  busRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenBox: {
    backgroundColor: "#1e824c",
    width: 140,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "black",
  },
  greenBoxText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
  },
  busTextContainer: {
    marginLeft: 25,
  },
  boldedBusLabel: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
  },
  boldedBusValue: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
  },
  idCircle: {
    position: "absolute", //same thing as qrCodeBox
    right: 30,
    bottom: 60,
    width: 260,
    height: 260,
    borderRadius: 130,
    overflow: "hidden", //forces image inside to stay inside the container
    backgroundColor: "green",
  },
  qrCodeBox: {
    position: "absolute", // it was getting cut off earlier; this forces it to stay on page
    left: 20,
    bottom: 20,
    backgroundColor: "white",
    width: 320,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  qrCodeRectangleT1: {
    height: 80,
    width: 20,
    backgroundColor: "black",
  },
  qrCodeRectangleT2: {
    height: 80,
    width: 32,
    backgroundColor: "black",
  },
});
