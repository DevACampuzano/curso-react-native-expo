import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';

if (Platform.OS === 'android') NavigationBar.setBackgroundColorAsync('black');

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={globalStyles.background}>
			<StatusBar style="light" />
			<Slot />
		</View>
	);
};

export default RootLayout;
