import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Order search' }}
      />
      <Stack.Screen
        name="[detail]"
        options={{ title: 'Order detail' }}
      />
    </Stack>
  );
}