import React from "react";
import { ImageBackground, View } from "react-native";
import { Text } from 'react-native-paper';
import { styles } from "./styles";

export default function Index() {
  return (
    // ImageBackground is een component die een afbeelding als achtergrond gebruikt. De content binnen de ImageBackground zal bovenop de afbeelding worden weergegeven.
    <ImageBackground
      source={require('../../assets/images/ucll.png')}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </ImageBackground>
  );
}
