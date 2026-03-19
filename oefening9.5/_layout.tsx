import { Stack } from 'expo-router';
import { SessionProvider } from '@/ctx';

export default function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Order search' }} />
        <Stack.Screen name="note/[id]" options={{ title: 'Note detail' }} />
      </Stack>
    </SessionProvider>
  );
}
