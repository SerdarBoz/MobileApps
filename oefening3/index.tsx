import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.overlay}>
      <Button
        title="Button"
        onPress={() => alert('Clicked!')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});