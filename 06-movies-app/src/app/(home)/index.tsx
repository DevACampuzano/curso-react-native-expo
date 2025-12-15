import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';

export default function HomeScreen() {
	const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
		useMovies();
	const safeArea = useSafeAreaInsets();
	if (
		nowPlayingQuery.isLoading ||
		nowPlayingQuery.isFetching ||
		popularQuery.isLoading ||
		popularQuery.isFetching ||
		topRatedQuery.isLoading ||
		topRatedQuery.isFetching ||
		upcomingQuery.isLoading ||
		upcomingQuery.isFetching
	) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator color="purple" size={40} />
			</View>
		);
	}

	return (
		<View style={{ paddingTop: safeArea.top }} className="mt-2">
			<Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
			{/* Carousel de imágenes */}
			<MainSlideshow movies={nowPlayingQuery.data ?? []} />

			{/*  Popular */}
			<MovieHorizontalList
				title="Populares"
				movies={popularQuery.data ?? []}
				className="mb-5"
			/>

			{/*  Top Rated */}
			<MovieHorizontalList
				title="Mejor Calificadas"
				movies={topRatedQuery.data ?? []}
				className="mb-5"
			/>

			{/*  Próximamente */}
			<MovieHorizontalList
				title="Próximamente"
				movies={upcomingQuery.data ?? []}
				className="mb-5"
			/>
		</View>
	);
}
