import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showOnePost, showLoader } from "dispatchers";

class DetailPost extends Component {
	constructor(props) {
		super(props);

		this.goToTop = this.goToTop.bind(this);

		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		const { postId } = this.props.match.params;
		this.goToTop();
		this.props.showLoader();
		this.props.showOnePost(postId);

		window.onscroll = function() {
			let positionDefaultOfArticleFeatureTable =
				document.getElementsByName("header").offsetTop + 64;

			if (window.pageYOffset >= positionDefaultOfArticleFeatureTable) {
				document.getElementById("articleFeature").classList.add("position-fixed");
			} else {
				document.getElementById("articleFeature").classList.remove("position-fixed");
			}
		};
	}

	goToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	/* RENDER */
	render() {
		const { post } = this.props.post;

		return (
			<article>
				<div className="container position-relative">
					{post && post.mastheadImage ? (
						<div className="row">
							<div
								className="col-lg-8 col-md-10 mx-auto text-justify"
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>
							<div className="col-lg-10 my-4 mx-auto">
								<img src={post.mastheadImage} alt="" className="w-100" />
							</div>
							<div className="position-absolute right-0 top-0 mt-5" id="articleFeature">
								<div>
									<div className="d-flex align-items-center justify-content-center flex-column article-item__feature__rate-point">
										<div className="d-flex align-items-center">
											<i className="far fa-comment mr-1"></i>
											<small className="text-left">{post.comments.amount}</small>
										</div>
										<div className="d-flex w-100 ml-auto">
											<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 mr-1 mt-n1">
												<i className="fas fa-caret-up mb-n1"></i>
												<i className="fas fa-caret-down mt-n2"></i>
											</div>
											<small className="text-left">{post.views}</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="alert alert-danger text-uppercase">
							this link doesn't redirect to any page
						</div>
					)}
				</div>
			</article>
		);
	}
}

DetailPost.proTypes = {
	showOnePost: PropTypes.func.isRequired,
	post: PropTypes.array,
	showLoader: PropTypes.func.isRequired,
};

DetailPost.defaultProps = {
	post: [],
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

const mapDispatchToProps = {
	showOnePost,
	showLoader,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailPost);
