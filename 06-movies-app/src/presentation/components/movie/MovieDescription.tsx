import { Text, View } from 'react-native';
import { Formatter } from '@/config/helpers/formatter';

interface Props {
	movie: CompleteMovie;
}

const MovieDescription: React.FC<Props> = ({ movie }) => {
	return (
		<View className="mx-5">
			<View className="flex-row ">
				<Text>{movie.rating}</Text>
				<Text> - {movie.genres.join(', ')}</Text>
			</View>
			<Text className="font-bold mt-5">Historia</Text>
			<Text className="font-normal mt-2">{movie.description}</Text>
			<Text className="font-bold mt-2 text-2xl">
				{Formatter.currency(movie.budget)}
			</Text>
		</View>
	);
};

export default MovieDescription;
