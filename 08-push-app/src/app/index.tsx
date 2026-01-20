import { FlatList, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import usePushNotifications from '@/hooks/usePushNotifications';

const PushApp = () => {
	const { expoPushToken, notifications } = usePushNotifications();
	return (
		<View
			style={{
				marginHorizontal: 10,
				marginTop: 5,
			}}
		>
			<ThemedText>Token: {expoPushToken}</ThemedText>
			<ThemedText
				style={{
					marginTop: 10,
					fontWeight: 'bold',
					fontSize: 25,
				}}
			>
				Notifications
			</ThemedText>
			<FlatList
				data={notifications}
				keyExtractor={(item) => item.request.identifier}
				renderItem={({ item }) => (
					<View>
						<ThemedText style={{ fontWeight: 'bold' }}>
							Title: {item.request.content.title}
						</ThemedText>
						<ThemedText>Body: {item.request.content.body}</ThemedText>
						<ThemedText>
							Data: {JSON.stringify(item.request.content.data)}
						</ThemedText>
					</View>
				)}
				ItemSeparatorComponent={() => (
					<View style={{ height: 1, backgroundColor: 'grey', opacity: 0.3 }} />
				)}
			/>
		</View>
	);
};

export default PushApp;
