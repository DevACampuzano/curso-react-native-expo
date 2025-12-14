import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'indigo',
			}}
		>
			<Tabs.Screen
				name="(stack)"
				options={{
					title: 'stack',
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="person" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="home/index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites/index"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="heart" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
