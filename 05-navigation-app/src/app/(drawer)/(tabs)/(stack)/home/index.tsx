import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
	const navigation = useNavigation();

	const onToggkeDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer);
	};

	return (
		<SafeAreaView>
			<View className="px-10 mt-5">
				<CustomButton
					className="mb-2"
					color="primary"
					onPress={() => router.push('/products')}
				>
					Productos
				</CustomButton>
				<CustomButton
					className="mb-2"
					color="secondary"
					onPress={() => router.push('/profile')}
				>
					Perfil
				</CustomButton>
				<CustomButton
					className="mb-2"
					color="tertiary"
					onPress={() => router.push('/settings')}
				>
					Configuraciones
				</CustomButton>

				<Link href={'/products'} asChild>
					<CustomButton className="mb-10" variant="text-only">
						Productos
					</CustomButton>
				</Link>

				<CustomButton onPress={onToggkeDrawer}>Abrir Menu</CustomButton>
				{/* <Link
					href={'/products'}
					className="mb-5 underline text-blue-500 text-2xl font-work-medium"
				>
					Productos
				</Link>
				<Link
					href={'/profile'}
					className="mb-5 underline text-blue-500 text-2xl font-work-medium"
				>
					Perfil
				</Link>
				<Link
					href={'/settings'}
					className="mb-5 underline text-blue-500 text-2xl font-work-medium"
				>
					Configuraciones
				</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
