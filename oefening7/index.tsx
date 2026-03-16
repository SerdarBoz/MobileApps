import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text, RadioButton } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const [left, onChangeLeft] = React.useState<string | undefined>();
  const [right, onChangeRight] = React.useState<string | undefined>();
  const [value, setValue] = React.useState('add');
  const [result, setResult] = React.useState<number | null>(null);

  function calculate() {
    switch (value) {
      case 'add':
        setResult(Number(left) + Number(right));
        break;
      case 'subtract':
        setResult(Number(left) - Number(right));
        break;
      case 'multiply':
        setResult(Number(left) * Number(right));
        break;
      case 'divide':
        setResult(Number(left) / Number(right));
        break;
    }

  }
  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={left} onChangeText={onChangeLeft}></TextInput>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={styles.row}>
            <View style={styles.option}>
              <Text>Add</Text>
              <RadioButton value="add" />
            </View>
            <View style={styles.option}>
              <Text>Subtract</Text>
              <RadioButton value="subtract" />
            </View>
            <View style={styles.option}>
              <Text>Multiply</Text>
              <RadioButton value="multiply" />
            </View>
            <View style={styles.option}>
              <Text>Divide</Text>
              <RadioButton value="divide" />
            </View>
          </View>
        </RadioButton.Group>

        <TextInput value={right} onChangeText={onChangeRight}></TextInput>
        <Text>=</Text>
        <Text>{result !== null ? result : ""}</Text>
        <Button onPress={calculate}>Calculate</Button>
      </View>
    </SafeAreaView>
  );

} const styles = StyleSheet.create({
  row: {
    flexDirection: "row", // arrange children horizontally
    alignItems: "center", // vertical alignment
  },
  option: {
    flexDirection: "row", // text + radio horizontally
    alignItems: "center",
    marginRight: 20, // space between options
  },
});