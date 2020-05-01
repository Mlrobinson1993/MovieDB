import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MostPopular from '../Pages/MostPopular/index';
import ComingSoon from '../Pages/ComingSoon/index';
import TopRated from '../Pages/TopRated/index';
import PrivateHome from '../Pages/PrivateHome/index';
import SignIn from '../Auth/SignIn/index';
import SignUp from '../Auth/SignUp/index';
import ForgotPassword from '../Auth/ForgotPassword/index';
import VerifyEmail from '../Auth/VerifyEmail/index';
import FavouritesPage from '../Pages/Favourites/index';
import Preferences from '../Pages/Account/Preferences/index';
import Account from '../Pages/Account/index';
import IndiMovie from '../Pages/IndiMovie/index';
import IndiActor from '../Pages/IndiActor/index';
export default function Routes() {
	return (
		<>
			{/*User is not signed in*/}
			<Switch>
				<Route exact path='/' component={MostPopular} />
				<Route exact path='/coming-soon' component={ComingSoon} />
				<Route exact path='/top-rated' component={TopRated} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/forgotpassword' component={ForgotPassword} />
				<Route exact path='/verifyemail' component={VerifyEmail} />
				<Route exact path='/movies/:movieId' component={IndiMovie} />
				<Route exact path='/cast/:actorId' component={IndiActor} />
			</Switch>

			{/*If user is signed in but email isnt verified*/}
			{/* <Switch>
				<Route exact path='/' component={PublicHome} />
				<Route exact path='/account' component={Account} />
				<Route exact path='/verifyemail' component={VerifyEmail} />
			</Switch> */}

			{/*If a user is signed in and email is verified*/}
			{/* <Switch>
				<Route exact path='/' component={PrivateHome} />
				<Route exact path='/account' component={Account} />
				<Route exact path='/preferences' component={Preferences} />
				<Route exact path='/account' component={Account} /> <<<<FOR INDIVIDUAL MOVIE
				<Route exact path='/account' component={Account} /> <<<<FOR USERS PROFILE

				<Route exact path='/favourites' component={FavouritesPage} />
			</Switch> */}
		</>
	);
}
