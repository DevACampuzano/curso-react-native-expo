import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="./loading/index" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="./permission/index" options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen name="./map/index" options={{ headerShown: false, animation: "fade" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
