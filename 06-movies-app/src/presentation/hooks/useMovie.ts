import { useQuery } from '@tanstack/react-query';
import { getMovieByIdAction } from '@/core/actions/movies/get-movie.action';
import { getMovieCastAction } from '@/core/actions/movies/getMovieCastAction';

export const useMovie = (id: string | number) => {
	const movieQuery = useQuery({
		queryKey: ['movie', id],
		queryFn: () => getMovieByIdAction(id),
		staleTime: 1000 * 60 * 60 * 24,
	});
	const castQuery = useQuery({
		queryKey: ['movie', id, 'cast'],
		queryFn: () => getMovieCastAction(id),
		staleTime: 1000 * 60 * 60 * 24,
	});

	return {
		movieQuery,
		castQuery,
	};
};
