import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { products } from '@/store/products.store';

const ProductsScreen = () => {
	return (
		<View className="flex flex-1 px-4">
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View className="mt-10">
						<Text className="text-2xl font-work-black">{item.title}</Text>
						<Text className=" font-work-light">{item.description}</Text>
						<View className=" flex flex-row justify-between items-center">
							<Text className=" font-work-black">${item.price}</Text>
							<Link href={`/products/${item.id}`} className="text-primary mt-2">
								Ver Detalles
							</Link>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default ProductsScreen;
