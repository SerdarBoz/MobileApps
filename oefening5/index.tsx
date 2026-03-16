import React, { useState } from "react";
import { Button, View, Text } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: "center", marginTop: 40, justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Button clicked {count} times
      </Text>

      <Button title="Click me!"
        onPress={() => setCount(prev => prev + 1)} />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Reset"
          onPress={() => setCount(0)}
          color="red"
        />
      </View>
    </View>
  );
}