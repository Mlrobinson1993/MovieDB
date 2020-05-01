import styled from 'styled-components';

export const MovieContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 2fr;
	grid-gap: 3vw;
	margin: 0 auto 2rem auto;
	max-width: 1100px;
`;

export const IMG = styled.img`
	height: 70vh;
	border-radius: 5px;
	box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
	align-self: center;
`;

export const MetaDataContainer = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	font-size: 0.8em;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;

		span {
			margin-left: 0.25rem;
			font-size: 1em;
		}
	}
`;

export const TextContainer = styled.div`
	width: 100%;
	grid-column: 2;
	display: flex;
	flex-direction: column;

	h1 {
		margin-bottom: 0.5rem;
		font-weight: 400;
	}

	p {
		font-size: 0.8em;
	}

	em {
		font-size: 1em;
		font-weight: 600;
	}
`;
export const TagContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	span {
		padding: 0.25rem;
		font-size: 0.8em;
		text-decoration: underline;
	}

	span:first-of-type {
		padding-left: 0;
	}
`;

export const SubHeading = styled.h4`
	font-size: 1rem;
	margin: 0;
`;
export const ButtonContainer = styled.div`
	font-size: 1rem;
	margin: 0;
`;
export const Button = styled.button`
	font-size: 1rem;
	margin: 0;
	margin-right: 0.5rem;
	background-color: transparent;
	border-radius: 30px;
	border: 1px solid black;
	padding: 0.5rem 0.75rem;
	transition: 0.2s ease-out;
	transform: translateY(0);

	&:hover {
		background-color: black;
		transform: translateY(-3px);

		& a,
		& span {
			color: white;
		}
	}

	a {
		transition: 0.2s ease-out;
		text-decoration: none;
		color: black;
	}

	span {
		transition: 0.2s ease-out;
		color: black;
		font-size: 0.8em;
	}
`;
