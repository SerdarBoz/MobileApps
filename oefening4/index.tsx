import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <MyButton title="Button1" text="Button 1 was clicked!" />
      <MyButton title="Button2" text="Button 2 was clicked!" />
      <MyButton title="Button3" text="Button 3 was clicked!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});