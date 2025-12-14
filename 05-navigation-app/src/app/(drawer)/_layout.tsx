import { Ionicons } from '@expo/vector-icons';
import Drawer from 'expo-router/drawer';
import CustomDrawer from '@/components/shared/CustomDrawer';

export default function _layout() {
	return (
		<Drawer
			screenOptions={{
				overlayColor: 'rgba(0, 0, 0, 0.4)',
				drawerActiveTintColor: 'indigo',
				headerShadowVisible: false,
				sceneStyle: {
					backgroundColor: 'white',
				},
			}}
			drawerContent={CustomDrawer}
		>
			<Drawer.Screen
				name="(tabs)"
				options={{
					drawerLabel: 'Tabs',
					title: 'Tabs',
					headerShown: false,
					drawerIcon: ({ color, size }) => (
						<Ionicons name="swap-horizontal" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="user/index"
				options={{
					drawerLabel: 'User',
					title: 'User',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="person-circle" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="schedule/index"
				options={{
					drawerLabel: 'Schedule',
					title: 'Schedule',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="calendar" size={size} color={color} />
					),
				}}
			/>
		</Drawer>
	);
}
