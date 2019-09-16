import React, { Component } from "react";
import { connect } from "react-redux";
import ProTypes from "prop-types";

import { showOnePost } from "dispatchers";

import Tag from "../../shared/Tag/index";

class DetailPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		const { postId } = this.props.match.params;

		this.props.showOnePost(postId);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	/* RENDER */
	render() {
		const { post, isLoading } = this.props.post;

		if (!isLoading)
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
		return <div className="d-none" />;
	}
}

DetailPost.proTypes = {
	showOnePost: ProTypes.func.isRequired,
	post: ProTypes.array,
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
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailPost);
