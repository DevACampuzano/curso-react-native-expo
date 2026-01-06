import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';

const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4]);
	const primaryColor = useThemeColor({}, 'primary');
	const loadMore = () => {
		setNumbers([
			...numbers,
			...Array.from({ length: 5 }, (_, i) => numbers.length + i),
		]);
	};
	return (
		<ThemedView>
			<FlatList
				data={numbers}
				renderItem={({ item }) => <ListItem number={item} />}
				onEndReached={loadMore}
				onEndReachedThreshold={0.8}
				ListFooterComponent={() => (
					<View className="h-[150px] items-center justify-center">
						<ActivityIndicator size={40} color={primaryColor} />
					</View>
				)}
			/>
		</ThemedView>
	);
};
export default InfiniteScrollScreen;

interface ListItemProps {
	number: number;
}

const ListItem = ({ number }: ListItemProps) => {
	return (
		<FadeInImage
			uri={`https://picsum.photos/id/${number}/500/400`}
			style={{ width: '100%', height: 400 }}
		/>
		// <Image
		// 	source={{
		// 		uri: `https://picsum.photos/id/${number}/500/400`,
		// 		height: 400,
		// 	}}
		// 	style={{
		// 		width: '100%',
		// 	}}
		// />
	);
};
