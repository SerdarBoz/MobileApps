import React from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const [left, onChangeLeft] = React.useState<string | undefined>();
  const [right, onChangeRight] = React.useState<string | undefined>();
  const [result, setResult] = React.useState<number | null>(null);

  function calculate() {
    const sum = Number(left) + Number(right);
    setResult(sum);
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={left} onChangeText={onChangeLeft}></TextInput>
        <Text>+</Text>
        <TextInput value={right} onChangeText={onChangeRight}></TextInput>
        <Text>=</Text>
        <Text>{result !== null ? result : ""}</Text>
        <Button onPress={calculate}>Calculate</Button>
      </View>
    </SafeAreaView>
  );
}