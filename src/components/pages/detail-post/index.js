import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showOnePost, showLoader } from "dispatchers";

import Tag from "../../shared/Tag/index";
import Loader from "../../shared/Loader/index";

class DetailPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

		const { postId } = this.props.match.params;
		this.props.showLoader();
		this.props.showOnePost(postId);
	}

	/* RENDER */
	render() {
		const { post, isLoading } = this.props.post;

		if (isLoading) return <Loader />;
		else
			return (
				<article>
					<div className="container">
						<div className="row">
							<div
								className="col-lg-8 col-md-10 mx-auto"
								dangerouslySetInnerHTML={{ __html: post.summary }}
							/>
							<div className="col-lg-8 col-md-10 mx-auto">
								For more infomations, check
								<a href={post.url} className="text-dark text-decoration-none">
									TVMAZE
								</a>
							</div>
							<div className="col-lg-10 my-4 mx-auto">
								<img src={post.image ? post.image.original : ""} alt="" className="w-100" />
							</div>
						</div>
						<div className="col-lg-8 col-md-10 mx-auto mb-3 mb-md-5 d-flex flex-wrap">
							<div className="mx-n3 w-100">
								{post.genres
									? post.genres.map((item, index) => <Tag key={index + 1} content={item} />)
									: ""}
							</div>
						</div>
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
