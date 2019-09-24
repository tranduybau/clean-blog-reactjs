import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showPosts, clearInfoPost, showLoader } from "dispatchers";

import ArticleItem from "../../shared/ArticleItem/index";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
			page: 1,
		};

		this.getNewerArticles = this.getNewerArticles.bind(this);
		this.getOlderArticles = this.getOlderArticles.bind(this);
	}

	goToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	getOlderArticles() {
		let currentPage = this.state.page + 1;

		this.setState({
			page: currentPage,
		});

		this.props.showPosts(currentPage);
		this.goToTop();
	}
	getNewerArticles() {
		let currentPage = this.state.page - 1;

		this.setState({
			page: currentPage,
		});

		this.props.showPosts(currentPage);
		this.goToTop();
	}

	componentDidMount() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

		this.props.showLoader();
		this.props.showPosts(this.state.page);
		this.props.clearInfoPost();
		this.goToTop();
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
							<div className="d-flex align-items-center mt-4">
								<Link
									className={`btn btn-primary mr-auto ${this.state.page === 1 ? "d-none" : ""}`}
									to="#"
									onClick={this.getNewerArticles}>
									&larr; Newer Posts
								</Link>
								<Link
									className={`btn btn-primary ml-auto ${posts.length === 0 ? "d-none" : ""}`}
									to="#"
									onClick={this.getOlderArticles}>
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

Search.propTypes = {
	showPosts: PropTypes.func.isRequired,
	clearInfoPost: PropTypes.func.isRequired,
	post: PropTypes.object,
	showLoader: PropTypes.func.isRequired,
};

Search.defaultProps = {
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
)(Search);
