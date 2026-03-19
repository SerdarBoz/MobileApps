import { View, Text, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function NotFound() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Oops! Page not found.</Text>
      <Button
        title="Go Home"
        onPress={() => router.replace('/')} // <-- updated
      />
    </View>
  );
}