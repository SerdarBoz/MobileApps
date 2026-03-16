import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    // safe area view zorgt ervoor dat de content niet onder de status bar of de notch van een telefoon komt
    <SafeAreaView>
      <View>
        <Text>
          Hello, this is the main index page!
        </Text>
      </View>
    </SafeAreaView>
  );
}