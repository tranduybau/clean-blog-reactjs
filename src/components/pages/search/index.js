import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { clearInfoPost, showLoader, searchPosts } from "dispatchers";

import ArticleItem from "../../shared/ArticleItem/index";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
			page: 1,
			isLoadingArticles: false,
		};

		this.paginator = this.paginator.bind(this);
		this.goToTop = this.goToTop.bind(this);
	}

	goToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	paginator(number) {
		const { keyword } = this.props.match.params;
		let page = this.state.page + number;

		this.props.searchPosts({ keyword, page });
		this.goToTop();
		this.props.showLoader();

		this.setState({
			page: page,
		});
	}

	componentDidMount() {
		const { keyword } = this.props.match.params;
		const page = this.state.page;

		this.props.searchPosts({ keyword, page });
		this.goToTop();
		this.props.showLoader();
		this.props.clearInfoPost();
	}

	componentDidUpdate() {}

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
									onClick={() => this.paginator(-1)}>
									&larr; Newer Posts
								</Link>
								<Link
									className={`btn btn-primary ml-auto ${posts.length < 10 ? "d-none" : ""}`}
									to="#"
									onClick={() => this.paginator(1)}>
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
	clearInfoPost: PropTypes.func.isRequired,
	post: PropTypes.object,
	showLoader: PropTypes.func.isRequired,
	searchPosts: PropTypes.func.isRequired,
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
	clearInfoPost,
	showLoader,
	searchPosts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
