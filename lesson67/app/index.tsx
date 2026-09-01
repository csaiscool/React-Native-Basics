import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{ borderColor: "black", borderWidth: 3, borderRadius: 10 }}
        placeholder="Name"
        placeholderTextColor="grey"
        value={name}
        onChangeText={(x) => setName(x)}
      />
      <View style={{ height: 5 }} />
      <TextInput
        style={{ borderColor: "black", borderWidth: 3, borderRadius: 10 }}
        placeholder="Age"
        placeholderTextColor="grey"
        value={age}
        onChangeText={(y) => setAge(y)}
      />
      <Text style={{ fontSize: 24 }}>Name: {name}</Text>
      <Text style={{ fontSize: 24 }}>Age: {age}</Text>
    </View>
  );
}
