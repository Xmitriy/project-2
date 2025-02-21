import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,

        gestureEnabled: false
      }}
      initialRouteName="login"
    >
      <Stack.Screen 
        name="login"
        options={{
          headerBackVisible: false
        }}
      />
      <Stack.Screen name="signup" />
    </Stack>
  );
}