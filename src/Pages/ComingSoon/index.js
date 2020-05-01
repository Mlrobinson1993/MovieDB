import React, { useState, useEffect } from 'react';
import { getData } from '../../Data/GetData';
import NextButton from '../../components/Buttons/NextButton/index';
import {
	CardContainer,
	MovieCard,
	MovieTitle,
	MovieRelease,
	MovieImg,
	RatingContainer,
} from '../MostPopular/Styles';
import {
	PageHeadingContainer,
	PageContainer,
} from '../../Layout/Container/Styles';
import PageHeading from '../../Typography/PageHeading';
import PrevButton from '../../components/Buttons/PrevButton';
import Placeholder from '../../Images/placeholder.png';
import { Link } from 'react-router-dom';
export default function ComingSoon() {
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);
	useEffect(() => {
		getData(
			'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=',
			(data) => {
				setData(data);
				console.log(data);
			},
			pageNum
		);
		return () => {};
	}, [pageNum]);

	const handleNextPage = (e) => {
		e.preventDefault();
		console.log('clicked');
		setPageNum(pageNum + 1);
		getData(
			'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=',
			(data) => {
				setData(data);
				console.log(data);
			},
			pageNum
		);

		document.body.scrollTop = 0;
	};

	const handlePrevPage = (e) => {
		e.preventDefault();

		if (pageNum !== 1) {
			setPageNum(pageNum - 1);
			getData(
				'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=',
				(data) => {
					setData(data);
					console.log(data);
				},
				pageNum
			);
		} else {
			document.body.scrollTop = 0;
		}
	};

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
		<PageContainer>
			<PageHeadingContainer>
				<PageHeading as='h1' looksLike='h1' text='Coming Soon' />
			</PageHeadingContainer>
			<CardContainer>
				{data ? (
					data.results.map((movie) => {
						return (
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
						);
					})
				) : (
					<h1>hello </h1>
				)}
			</CardContainer>
			<PrevButton handleClick={handlePrevPage} />
			<NextButton handleClick={handleNextPage} />
		</PageContainer>
	);
}
