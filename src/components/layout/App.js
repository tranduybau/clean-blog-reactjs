import React, { Component } from "react";

import Nav from "./nav";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Loader from "../shared/Loader/index";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Header />
				<Loader />
				<Main />
				<hr />
				<Footer />
			</div>
		);
	}
}

export default App;
