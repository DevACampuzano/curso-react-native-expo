import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
	cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
	return (
		<View className="mt-5 mb-20">
			<Text className="font-bold text-2xl px-5">Actores</Text>
			<FlatList
				data={cast}
				renderItem={({ item }) => <ActorCard actor={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerClassName="mx-5"
			/>
		</View>
	);
};

export default MovieCast;
