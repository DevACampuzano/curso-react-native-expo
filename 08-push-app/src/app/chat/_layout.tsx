import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useColorScheme, View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import 'react-native-reanimated';

export default function RootLayout() {
	const colorScheme = useColorScheme();

	const backgroundColor = useThemeColor({}, 'background');

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<View
				style={{
					flex: 1,
					backgroundColor,
				}}
			>
				<Slot />
			</View>
		</ThemeProvider>
	);
}
