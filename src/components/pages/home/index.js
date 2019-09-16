import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showPosts, clearInfoPost } from "dispatchers";

import ArticleItem from "../../shared/ArticleItem/index";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	componentDidMount() {
		this.props.showPosts();
		this.props.clearInfoPost();
	}

	/* RENDER */
	render() {
		const { posts } = this.props.post;

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<div className="clearfix">
							{posts.map((item, index) => (
								<div key={index}>
									<ArticleItem item={item} />
									<hr />
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
	}
}

Home.propTypes = {
	showPosts: PropTypes.func.isRequired,
	clearInfoPost: PropTypes.func.isRequired,
	post: PropTypes.object,
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
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
