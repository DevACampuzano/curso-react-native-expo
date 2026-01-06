import { Stack } from 'expo-router';

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="modal-windows"
				options={{
					presentation: 'modal',
				}}
			/>
			<Stack.Screen
				name="modal-windows-2"
				options={{
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
}
