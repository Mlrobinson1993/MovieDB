import React, { useState, useEffect } from 'react';
import { getData } from '../../Data/GetData';
import { PageHeadingContainer } from '../../Layout/Container/Styles';
import PageHeading from '../../Typography/PageHeading';
import { SliderContainer, Name, Character, Card, Clicker, IMG } from './Styles';

export default function CastSlider({ id }) {
	const [cast, setCast] = useState([]);

	console.log(id);

	useEffect(() => {
		getData(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=`,
			(data) => setCast(data.cast)
		);
	}, [id]);
	return (
		<>
			<PageHeadingContainer>
				<PageHeading as='h2' looksLike='h1' text='Cast' />
			</PageHeadingContainer>
			<SliderContainer>
				{cast ? (
					cast.map((castMember) => {
						return (
							<Clicker to={`/cast/${castMember.id}`}>
								<Card>
									<IMG
										src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
										alt={`${castMember.name} headshot`}
									/>
									<Name>{castMember.name}</Name>
									<Character>{castMember.character}</Character>
								</Card>
							</Clicker>
						);
					})
				) : (
					<h1>loading...</h1>
				)}
			</SliderContainer>
		</>
	);
}
