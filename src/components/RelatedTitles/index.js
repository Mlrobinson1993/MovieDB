import React, { useState, useEffect } from 'react';
import {
	CardContainer,
	MovieCard,
	MovieTitle,
	MovieRelease,
	MovieImg,
	RatingContainer,
} from '../../Pages/MostPopular/Styles';
import { Link } from 'react-router-dom';
import { PageHeadingContainer } from '../../Layout/Container/Styles';
import PageHeading from '../../Typography/PageHeading';
import { getData } from '../../Data/GetData';
import Placeholder from '../../Images/placeholder.png';

export default function RelatedTitles({ genres, pathName, id }) {
	const [relatedTitles, setRelatedTitles] = useState([]);
	const [pageNum, setPageNum] = useState(1);

	useEffect(() => {
		let url = 'https://api.themoviedb.org/3/discover/movie?with_genres=';

		genres.forEach((genre, index) => {
			if (index !== genres.length - 1) {
				url += genre.id + ',';
			} else {
				url += genre.id;
			}
		});

		console.log(url);

		getData(url + '&api_key=', (data) => {
			setRelatedTitles(data);
		});
	}, [pageNum, genres, pathName]);

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
				<PageHeading as='h2' looksLike='h1' text='Related Titles' />
			</PageHeadingContainer>
			<CardContainer>
				{relatedTitles.results ? (
					relatedTitles.results.map((movie) => {
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
