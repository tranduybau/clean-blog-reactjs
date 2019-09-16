import React, { Component } from "react";

import Nav from "./nav";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Seacher from "../shared/Searcher/index";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Header />
				<Main />
				<hr />
				<Footer />
				<Seacher />
			</div>
		);
	}
}

export default App;
