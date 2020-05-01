import React from 'react';
import { Nav } from './Styles';
import { NavLink } from 'react-router-dom';

export default function Navi() {
	return (
		<Nav>
			<div className='featured'>
				<NavLink exact to='/'>
					Most Popular
				</NavLink>
				<NavLink exact to='/coming-soon'>
					Coming Soon
				</NavLink>
				<NavLink exact to='/top-rated'>
					Top Rated
				</NavLink>
			</div>

			<div className='genres'></div>
		</Nav>
	);
}
