import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import moment from 'moment';

import Home from './components/home';
import Profile from './components/profile';
import Footer from './components/footer';

moment.locale('pt-br');

const App = () => (
	<div className="container">
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/:id">
					<Profile />
				</Route>
			</Switch>
		</Router>

		<Footer />
	</div>
);

export default App;
