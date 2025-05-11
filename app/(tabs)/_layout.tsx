import { Tabs } from 'expo-router';
import type React from 'react';

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="(home)" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </>
  );
}
