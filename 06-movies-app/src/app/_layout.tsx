import { Stack } from 'expo-router';
import '../globals.css';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
	useReactQueryDevTools(queryClient);
	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerShown: false,
					animation: 'slide_from_right',
					contentStyle: {
						backgroundColor: 'white',
					},
				}}
			/>
		</QueryClientProvider>
	);
}
