import React, { useState, useEffect } from 'react';
import { getData } from '../../Data/GetData';
import {
	MovieContainer as ActorContainer,
	TextContainer,
	IMG,
	MetaDataContainer,
	TagContainer,
	SubHeading,
	Button,
	ButtonContainer,
} from '../IndiMovie/Styles';
import { PageContainer } from '../../Layout/Container/Styles';
import { FaImdb } from 'react-icons/fa';
import AlsoFeaturesIn from '../../components/AlsoFeaturesIn/index';

export default function IndiActor({ match, location }) {
	const [actor, setActor] = useState({});
	const {
		params: { actorId },
	} = match;

	useEffect(() => {
		getData(`https://api.themoviedb.org/3/person/${actorId}?api_key=`, (data) =>
			setActor(data)
		);
	}, []);

	return (
		<PageContainer>
			<ActorContainer>
				<IMG
					src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
					alt={`${actor.name} Headshot`}
				></IMG>
				<TextContainer>
					<h1>{actor.name}</h1>
					<MetaDataContainer>
						<div>
							{actor.place_of_birth && (
								<span>
									{
										actor.place_of_birth.split(',')[
											actor.place_of_birth.split(',').length - 1
										]
									}
								</span>
							)}
						</div>
						<div>
							{actor.birthday && (
								<span>
									<strong>Aged: </strong>
									{new Date().getFullYear() -
										parseInt(actor.birthday.split('-')[0])}{' '}
								</span>
							)}
						</div>
					</MetaDataContainer>
					<div style={{ margin: '1rem 0' }}>
						<h4 style={{ margin: '0 0 0.5rem 0' }}>Biography</h4>
						<p>{actor.biography || 'No biography available'}</p>
					</div>
					<ButtonContainer>
						<Button>
							<a
								href={`https://www.imdb.com/name/${actor.imdb_id}`}
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
				</TextContainer>
			</ActorContainer>

			<AlsoFeaturesIn id={actorId} />
		</PageContainer>
	);
}
