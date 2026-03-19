import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(orders)" options={{ headerShown: false }} />
        <Stack.Screen name="create-user" options={{ headerShown: false, presentation: 'modal'}} />
      </Stack>
    </SafeAreaView>
  );
}
