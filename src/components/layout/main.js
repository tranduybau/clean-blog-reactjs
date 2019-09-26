import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/index";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import DetailPost from "../pages/detail-post/index";
import Search from "../pages/search/index";
import Page404 from "../pages/page404/index";

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/detail-post/:postId" component={props => <DetailPost {...props} />} />
					<Route path="/search/:keyword" component={props => <Search {...props} />} />
					<Route component={Page404} />
				</Switch>
			</main>
		);
	}
}

export default Main;
