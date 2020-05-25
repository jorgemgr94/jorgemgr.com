import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Website from "./containers/Website";
import Resume from "./containers/Resume";

export default function App () {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Website />
				</Route>
				<Route path='/resume'>
					<Resume />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}
