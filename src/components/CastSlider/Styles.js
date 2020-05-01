import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Clicker = styled(Link)`
	text-decoration: none;
`;

export const SliderContainer = styled.div`
	width: 75vw;
	display: flex;
	margin: 0 0 3rem 0;
	overflow-x: scroll;
`;

export const Card = styled.article`
	margin: 0 1rem;

	&:first-of-type {
		margin-left: 0;
	}
`;

export const IMG = styled.img`
	height: 200px;
	border-radius: 5px;
`;

export const Name = styled.h3`
	font-size: 1.2rem;
	font-weight: 600;
	text-decoration: none;
	color: black;
	margin: 0;
`;
export const Character = styled.h4`
	font-size: 1rem;
	font-weight: 400;
	text-decoration: none;
	color: black;
	margin: 0;
`;
