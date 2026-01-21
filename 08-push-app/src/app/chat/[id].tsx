import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';

const ChatId = () => {
	const { id } = useLocalSearchParams();
	return (
		<View style={{ marginHorizontal: 10, marginTop: 5 }}>
			<ThemedText
				style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}
			>
				Chat ID Screen
			</ThemedText>
			<ThemedText style={{ fontWeight: 'bold', fontSize: 25 }}>
				ID: {id}
			</ThemedText>
		</View>
	);
};

export default ChatId;
