import styled from 'styled-components';

export const CardContainer = styled.ul`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	padding-left: 0;

	a {
		text-decoration: none;
	}
`;

export const MovieCard = styled.li`
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	max-width: 200px;
	height: 400px;
	overflow: hidden;

	transform: scale(1);
	transition: 0.2s ease-in-out;
	cursor: pointer;
	box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);

	&:hover {
		transform: scale(1.02);
	}

	div {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
`;

export const MovieTitle = styled.span`
	font-size: 1em;
	font-weight: 600;
`;
export const MovieRelease = styled.span`
	font-size: 0.8em;
	font-weight: 400;
`;

export const MovieImg = styled.img`
	height: 375px;
	object-fit: cover;
	border-radius: 5px;
	margin-bottom: 5px;
`;

export const RatingContainer = styled.div`
	span {
		font-size: 1em;
	}
`;
