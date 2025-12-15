export class MovieMapper {
	static fromTheMovieDBToMovie = (movieDBResponse: Result): Movie => {
		return {
			id: movieDBResponse.id,
			title: movieDBResponse.title,
			description: movieDBResponse.overview,
			releaseDate: new Date(movieDBResponse.release_date),
			rating: movieDBResponse.vote_average,
			poster: `https://image.tmdb.org/t/p/original${movieDBResponse.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/original${movieDBResponse.backdrop_path}`,
			video: movieDBResponse.video,
		};
	};
}
