import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Event } from "./views/event";
import { Signin } from "./views/signin";
import { Signup } from "./views/signup";
import { EventForm } from "./views/eventForm";
import { Private } from "./views/private";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ScrollToTop from "./component/scrollToTop";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/signin">
							<Signin />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/private">
							<Private />
						</Route>
						<Route exact path="/event">
							<Event />
						</Route>
						<Route exact path="/eventForm">
							<EventForm />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
