//https://api.themoviedb.org/3/movie/{MOVIE ID}/videos?api_key= <<<< FOR YOUTUBE TRAILERS

import React, { useState, useEffect } from 'react';
import { getData } from '../../Data/GetData';
import {
	MovieContainer,
	TextContainer,
	IMG,
	MetaDataContainer,
	TagContainer,
	SubHeading,
	Button,
	ButtonContainer,
} from './Styles';
import { PageContainer } from '../../Layout/Container/Styles';
import CastSlider from '../../components/CastSlider/index';
import RelatedTitles from '../../components/RelatedTitles/index';
import {
	FaImdb,
	FaLink,
	FaRegClock,
	FaStar,
	FaGenderless,
} from 'react-icons/fa';

export default function IndiMovie({ match, location }) {
	const [movieData, setMovieData] = useState({});
	const {
		params: { movieId },
	} = match;

	useEffect(() => {
		getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=`, (data) =>
			setMovieData(data)
		);
	}, [location.pathname]);

	const handleClick = () => {
		console.log(movieData.genres);
	};

	return (
		<PageContainer>
			<MovieContainer
				bgImg={`https://image.tmdb.org/t/p/w200${movieData.backdrop_path}`}
			>
				<IMG
					src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
					alt={`${movieData.title} poster image`}
				/>
				<TextContainer onClick={handleClick}>
					<h1 style={{ margin: 0 }}>
						{movieData.title} (
						{movieData.release_date && movieData.release_date.split('-')[0]})
					</h1>
					<em style={{ margin: '0.5rem 0' }}>{movieData.tagline}</em>
					<MetaDataContainer>
						<div>
							<FaStar />
							<span role='img' aria-label='star emoji'>
								{movieData.vote_average}
							</span>
						</div>
						<div>
							<FaRegClock />
							<span>{movieData.runtime && movieData.runtime} Min.</span>
						</div>
					</MetaDataContainer>

					<div style={{ margin: '1rem 0' }}>
						<h4 style={{ margin: '0 0 0.5rem 0' }}>Overview</h4>
						<p style={{ margin: 0 }}>{movieData.overview}</p>
					</div>

					<div style={{ margin: '1rem 0' }}>
						<SubHeading>Genres</SubHeading>
						<TagContainer>
							{movieData.genres &&
								movieData.genres.map((genre) => (
									<>
										<FaGenderless size='15px' />
										<span> {genre.name}</span>
									</>
								))}
						</TagContainer>
					</div>

					<ButtonContainer>
						<Button>
							<a
								href={movieData.homepage}
								target='_blank'
								rel='noopener noreferrer'
							>
								Website{' '}
								<span>
									<FaLink />
								</span>
							</a>
						</Button>
						<Button>
							<a
								href={`https://www.imdb.com/title/${movieData.imdb_id}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								IMDB{' '}
								<span>
									<FaImdb />
								</span>
							</a>
						</Button>
					</ButtonContainer>
					{/* {movieData.video && <a href={movieData.homepage}>Trailer</a>} */}
				</TextContainer>
			</MovieContainer>

			<CastSlider id={movieId} />

			{movieData.genres && (
				<RelatedTitles
					genres={movieData.genres}
					pathName={location.pathname}
					id={movieId}
				/>
			)}
		</PageContainer>
	);
}
