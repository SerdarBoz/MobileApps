import { router, Stack } from 'expo-router';
import React from 'react';

import { Pressable, Text } from 'react-native';

export default function TabLayout() {
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerBackVisible: false,
        headerShown: true, title: '', headerRight: () => (
          <Pressable onPress={() => router.navigate('(new)')}>
            <Text>New</Text>
          </Pressable>
        ), headerLeft: () => (
          <Pressable onPress={() => router.navigate('/login')}>
            <Text>Logout</Text>
          </Pressable>
        )
      }} />
      <Stack.Screen name="(detail)" options={{ headerShown: true, presentation: 'modal', title: '' }} />
      <Stack.Screen name="(new)" options={{ headerShown: true, presentation: 'modal', title: '' }} />
    </Stack>
  );
}
