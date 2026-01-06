import { Link, router } from 'expo-router';
import { Text } from 'react-native';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const ModalScreen = () => {
	return (
		<ThemedView className="flex-1 items-center justify-center">
			<Link asChild href={'/modal/modal-windows'}>
				<Text className="text-light-text dark:text-dark-text my-2 text-xl underline">
					Ir a modal
				</Text>
			</Link>
			<ThemedButton
				onPress={() => {
					router.push('/modal/modal-windows');
				}}
				className="mt-2"
			>
				Abrir modal
			</ThemedButton>
		</ThemedView>
	);
};
export default ModalScreen;
