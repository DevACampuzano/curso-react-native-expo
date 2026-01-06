import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

const ModalScreen = () => {
	return (
		<ThemedView
			className="flex-1 items-center justify-center"
			bgColor="#A52182"
		>
			<ThemedText>Hola!!</ThemedText>

			<ThemedButton
				onPress={() => {
					router.push('/modal/modal-windows-2');
				}}
				className="mt-2"
			>
				otro modal
			</ThemedButton>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</ThemedView>
	);
};

export default ModalScreen;
