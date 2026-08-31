import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type propsType = {
  text?: string;
  color: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor: string;
  width: number;
  height: number;
};

const aimButton: React.FC<propsType> = ({
  color,
  borderWidth = 5,
  borderRadius = 20,
  width,
  height,
  backgroundColor,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          borderColor: color,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="aim" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default aimButton;

const styles = StyleSheet.create({});
