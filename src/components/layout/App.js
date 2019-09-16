import React, { Component } from "react";

import Nav from "./nav";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Loader from "../shared/Loader/index";
import Seacher from "../shared/Searcher/index";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Header />
				<Loader />
				<Main />
				<hr />
				<Footer />
				<div className="d-none">
					<Seacher />
				</div>
			</div>
		);
	}
}

export default App;
