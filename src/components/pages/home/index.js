import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showPosts, clearInfoPost, showLoader } from "dispatchers";

import ArticleItem from "../../shared/ArticleItem/index";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	componentDidMount() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

		this.props.showLoader();
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
							{posts.length > 0
								? posts.map((item, index) => (
										<div key={index}>
											<ArticleItem item={item} />
											{index + 1 < posts.length ? <hr /> : ""}
										</div>
								  ))
								: "Không có bài nào á"}
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
