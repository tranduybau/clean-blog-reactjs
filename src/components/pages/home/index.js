import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showPosts, clearInfoPost, showLoader } from "dispatchers";

import ArticleItem from "../../shared/ArticleItem/index";
import Loader from "../../shared/Loader/index";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	componentDidMount() {
		this.props.showLoader();
		this.props.showPosts();
		this.props.clearInfoPost();
	}

	/* RENDER */
	render() {
		const { posts, isLoading } = this.props.post;

		if (!isLoading)
			return (
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="clearfix">
								{posts.map((item, index) => (
									<div key={index}>
										<ArticleItem item={item} />
										{index + 1 < posts.length ? <hr /> : ""}
									</div>
								))}
								<div className="d-none">
									<Link className="btn btn-primary ml-auto" to="#">
										Older Posts &rarr;
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		return <Loader />;
	}
}

Home.propTypes = {
	showPosts: PropTypes.func.isRequired,
	clearInfoPost: PropTypes.func.isRequired,
	post: PropTypes.object,
	showLoader: PropTypes.func.isRequired,
};

Home.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

const mapDispatchToProps = {
	showPosts,
	clearInfoPost,
	showLoader,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
