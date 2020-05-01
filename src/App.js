import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import Navi from './Layout/Nav/Navi';
import MobileNav from './Layout/Nav/MobileNav';

function App() {
	return (
		<div
			className='App'
			style={{
				display: 'grid',
				gridTemplateColumns: '0.15fr 1.85fr',
				width: '100vw',
				minHeight: '100vh',
				overflowY: 'scroll',
				overflowX: 'hidden',
				backgroundColor: '#fff',
			}}
		>
			<Navi />
			{/* <MobileNav /> */}
			<Routes />
		</div>
	);
}

export default App;
