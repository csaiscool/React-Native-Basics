import AimButton from "@/components/AimButton";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AimButton
        color="black"
        backgroundColor="transparent"
        width={40}
        height={40}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
