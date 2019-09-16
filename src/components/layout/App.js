import React, { Component } from "react";
import ProTypes from "prop-types";
import { connect } from "react-redux";

import Nav from "./nav";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Loader from "../shared/Loader/index";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	render() {
		const { isLoading } = this.props.post;

		return (
			<div className="App">
				<Nav />
				<Header />
				{/* {isLoading ? <Loader /> : <Main />} */}
				<Main />
				<Loader />
				<hr />
				<Footer />
			</div>
		);
	}
}

App.proTypes = {
	post: ProTypes.objectOf,
};

App.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps)(App);
