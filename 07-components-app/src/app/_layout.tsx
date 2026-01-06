import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/useThemeColor';

import '../global.css';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const backgroundColor = useThemeColor({}, 'background');
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeChangerProvider>
			{/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
			<Stack
				screenOptions={{
					headerShadowVisible: false,
					contentStyle: {
						backgroundColor: backgroundColor,
					},
					headerStyle: {
						backgroundColor: backgroundColor,
					},
				}}
			>
				<Stack.Screen
					name="index"
					options={{
						title: '',
					}}
				/>

				{allRoutes.map((route) => (
					<Stack.Screen
						key={route.name}
						name={route.name}
						options={{
							title: route.title,
							headerShown: !route.title.includes('Slides'),
						}}
					/>
				))}
			</Stack>
			{/* </ThemeProvider> */}
		</ThemeChangerProvider>
	);
}
