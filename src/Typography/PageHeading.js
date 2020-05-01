import React from 'react';

export default function PageHeading({ as = 'h3', looksLike = 'h3', text }) {
	const getFontSize = () => {
		let fontSize;
		switch (looksLike) {
			case 'h1':
				fontSize = '1.6rem';
				break;
			case 'h2':
				fontSize = '1.4rem';
				break;
			case 'h3':
				fontSize = '1.2rem';
				break;
			case 'h4':
				fontSize = '1rem';
				break;
			case 'h5':
				fontSize = '0.8rem';
				break;
			case 'h6':
				fontSize = '0.6rem';
				break;
			default:
				fontSize = '1rem';
		}
		return fontSize;
	};

	const getHeadingType = (text) => {
		let heading;
		switch (as) {
			case 'h1':
				heading = (
					<h1 style={{ fontSize: getFontSize(), fontWeight: 400 }}>{text}</h1>
				);
				break;
			case 'h2':
				heading = <h2 style={{ fontSize: getFontSize() }}>{text}</h2>;
				break;
			case 'h3':
				heading = <h3 style={{ fontSize: getFontSize() }}>{text}</h3>;
				break;
			case 'h4':
				heading = <h4 style={{ fontSize: getFontSize() }}>{text}</h4>;
				break;
			case 'h5':
				heading = <h5 style={{ fontSize: getFontSize() }}>{text}</h5>;
				break;
			case 'h6':
				heading = <h6 style={{ fontSize: getFontSize() }}>{text}</h6>;
				break;
			default:
				heading = <h2>{text}</h2>;
		}
		return heading;
	};

	return getHeadingType(text);
}
