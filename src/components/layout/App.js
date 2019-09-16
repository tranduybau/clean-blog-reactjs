import React, { Component } from "react";
import { connect } from "react-redux";
import ProTypes from "prop-types";

import { showLoader } from "dispatchers";

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

	componentDidMount() {
		this.props.showLoader();
	}

	render() {
		const { isLoading } = this.props.post;

		return (
			<div className="App">
				<Nav />
				<Header />
				{isLoading ? <Loader /> : <Main />}
				<hr />
				<Footer />
				<div className="d-none">
					<Seacher />
				</div>
			</div>
		);
	}
}

App.proTypes = {
	showLoader: ProTypes.func.isRequired,
	post: ProTypes.object,
};

App.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

const mapDispatchToProps = {
	showLoader,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
