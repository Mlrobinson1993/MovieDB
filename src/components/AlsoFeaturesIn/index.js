import React, { useEffect, useState } from 'react';
import { getData } from '../../Data/GetData';
import { PageHeadingContainer } from '../../Layout/Container/Styles';

import PageHeading from '../../Typography/PageHeading';
import {
	CardContainer,
	MovieCard,
	MovieTitle,
	MovieRelease,
	MovieImg,
	RatingContainer,
} from '../../Pages/MostPopular/Styles';
import Placeholder from '../../Images/placeholder.png';
import { Link } from 'react-router-dom';

export default function AlsoFeaturesIn({ id }) {
	const [movies, setMovies] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	useEffect(() => {
		getData(
			`https://api.themoviedb.org/3/discover/movie?with_cast=${id}&sort_by=vote_average.desc&api_key=`,
			(data) => setMovies(data),
			pageNum
		);
	}, []);

	const shortenText = (text) => {
		let cutTitle = [];
		if (text.split(' ').length > 5) {
			cutTitle = text.split(' ').splice(0, 6);
			cutTitle[cutTitle.length - 1] = cutTitle[cutTitle.length - 1] + '...';
		} else {
			cutTitle = text.split(' ').splice(0, 6);
		}
		return cutTitle.join(' ');
	};

	return (
		<>
			<PageHeadingContainer>
				<PageHeading as='h2' looksLike='h1' text='Also Features In' />
			</PageHeadingContainer>
			<CardContainer>
				{movies.results ? (
					movies.results.map((movie) => {
						return (
							parseInt(movie.id) !== parseInt(id) && (
								<>
									<Link to={`/movies/${movie.id}`}>
										<MovieCard>
											<MovieImg
												src={
													movie.poster_path
														? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
														: Placeholder
												}
												alt={movie.title + ' poster image'}
											></MovieImg>
											<RatingContainer>
												<span role='img' aria-label='Star emoji'>
													⭐ {movie.vote_average}
												</span>
												<MovieTitle>{shortenText(movie.title)}</MovieTitle>
												<MovieRelease>{movie.release_date}</MovieRelease>
											</RatingContainer>
										</MovieCard>
									</Link>
								</>
							)
						);
					})
				) : (
					<h1>Loading...</h1>
				)}
			</CardContainer>
		</>
	);
}
