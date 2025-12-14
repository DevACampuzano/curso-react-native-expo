import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { products } from '@/store/products.store';

const ProductScreen = () => {
	const { id } = useLocalSearchParams();
	const navigation = useNavigation();
	const product = products.find((product) => product.id === id);

	useEffect(() => {
		navigation.setOptions({
			title: product?.title ?? 'Product',
		});
	}, [product]);

	if (!product) {
		return <Redirect href="/products" />;
	}

	return (
		<View className="px-5 mt-10">
			<Text className="text-2xl font-work-black">{product.title}</Text>
			<Text className="text-work-light">{product.description}</Text>
			<Text className="text-work-black mt-2 font-work-black">
				${product.price}
			</Text>
		</View>
	);
};

export default ProductScreen;
