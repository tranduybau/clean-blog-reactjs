import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showLoader } from "dispatchers";

import Home from "../pages/home/index";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import DetailPost from "../pages/detail-post/index";
import Loader from "../shared/Loader/index";

class Main extends Component {
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
		console.log(isLoading);

		return (
			<div>
				{isLoading ? (
					<Loader />
				) : (
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/detail-post/:postId" component={props => <DetailPost {...props} />} />
					</Switch>
				)}
			</div>
		);
	}
}

Main.proTypes = {
	showLoader: PropTypes.func,
	post: PropTypes.object,
};

Main.defaultProps = {
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
)(Main);
