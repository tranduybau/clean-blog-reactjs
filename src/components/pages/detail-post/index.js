import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showOnePost, showLoader } from "dispatchers";

import Comment from "../../shared/comments/index";

class DetailPost extends Component {
	constructor(props) {
		super(props);

		this.goToTop = this.goToTop.bind(this);

		this.state = {
			post: [],
			isRightArticleFeatureFixed: false,
		};
	}

	componentDidMount() {
		const { postId } = this.props.match.params;
		this.goToTop();
		this.props.showLoader();
		this.props.showOnePost(postId);
		this.changePositionOfRightArticleFeature = this.changePositionOfRightArticleFeature.bind(this);

		window.onscroll = this.changePositionOfRightArticleFeature;
	}

	componentWillUnmount() {
		window.onscroll = () => {};
	}

	changePositionOfRightArticleFeature() {
		if (window.pageYOffset > document.querySelector("header").offsetHeight) {
			this.setState({
				isRightArticleFeatureFixed: true,
			});
		} else {
			this.setState({
				isRightArticleFeatureFixed: false,
			});
		}
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
				{post && post.mastheadImage ? (
					<div className="position-relative">
						<div className="container">
							<div className="row">
								<div
									className="col-lg-8 col-md-10 mx-auto text-justify"
									dangerouslySetInnerHTML={{ __html: post.content }}
								/>
								<div className="col-lg-10 my-4 mx-auto">
									<img src={post.mastheadImage} alt="" className="w-100" />
								</div>
								{/* SECTION: comment */}
								<Comment comments={post.comments} />
								{/* SECTION:  article feature - right aside */}
							</div>
						</div>
						<div
							className={`right-0 transition-normal mr-5 ${
								this.state.isRightArticleFeatureFixed
									? "top-center position-fixed"
									: "position-absolute top-0 mt-5"
							}`}>
							<div>
								<div className="d-flex justify-content-center flex-column article-item__feature__rate-point">
									<div className="d-flex align-items-center">
										<i className="far fa-comment mr-1"></i>
										<small className="text-left">{post.comments.amount}</small>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`left-0  transition-normal ml-5 ${
								this.state.isRightArticleFeatureFixed
									? "top-center position-fixed"
									: "position-absolute top-0 mt-5"
							}`}>
							<div>
								<div
									className="d-flex justify-content-center flex-column article-item__feature__rate-point"
									style={{
										transform: `${
											this.state.isRightArticleFeatureFixed ? "" : "translateY(-19px)"
										}`,
									}}>
									<div className="d-flex align-items-center flex-column text-center">
										<i className="fas fa-caret-up cursor-pointer"></i>
										<small className="">{post.views}</small>
										<i className="fas fa-caret-down cursor-pointer"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="alert alert-danger text-uppercase">
									this link doesn't redirect to any page
								</div>
							</div>
						</div>
					</div>
				)}
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
