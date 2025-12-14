import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

export default function StackLayout() {
	const navigation = useNavigation();
	const onHeaderLeftClick = (canGoBack?: boolean) => {
		if (canGoBack) {
			router.back();
			return;
		}
		navigation.dispatch(DrawerActions.toggleDrawer);
	};
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,
				contentStyle: {
					backgroundColor: 'white',
				},
				headerLeft: ({ tintColor, canGoBack }) => (
					<Ionicons
						name={canGoBack ? 'arrow-back' : 'menu'}
						size={24}
						color={tintColor}
						onPress={() => onHeaderLeftClick(canGoBack)}
					/>
				),
			}}
		>
			<Stack.Screen name="home/index" options={{ title: 'Inicio' }} />
			<Stack.Screen name="products/index" options={{ title: 'Productos' }} />
			<Stack.Screen name="profile/index" options={{ title: 'Perfil' }} />
			<Stack.Screen name="settings/index" options={{ title: 'Ajustes' }} />
		</Stack>
	);
}
