import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TurboModuleRegistry } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    window.frameworkReady?.();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="(auth)"
          options={{
         
            headerBackVisible: true,
            gestureEnabled: true
          }}
        />
        <Stack.Screen 
          name="(tabs)"
          options={{
          
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}