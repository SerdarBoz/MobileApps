import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const [mode, setMode] = React.useState('view');
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        mode === 'view' ? (
          <Button title="Edit" onPress={() => setMode('edit')} />
        ) : (
          <Button title="Cancel" onPress={() => setMode('view')} />
        ),
    });
  }, [navigation, mode]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Detail Page</Text>
      <Text>ID: {id}</Text>

      {mode === 'view' ? (
        <Text>Not editable</Text>
      ) : (
        <>
          <TextInput
            placeholder="Editable"
            style={{ borderWidth: 1, padding: 8, marginTop: 10 }}
          />
          <Button title="Save" onPress={() => setMode('view')} />
        </>
      )}
    </View>
  );
}