import { movieApi } from '@/core/api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const nowPlayingMoviesAction = async () => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

		return movies;
	} catch (error) {
		console.log(error);
		throw 'Cannot lead now playing movies';
	}
};
