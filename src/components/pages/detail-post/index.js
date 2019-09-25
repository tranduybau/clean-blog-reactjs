import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showOnePost, showLoader } from "dispatchers";

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
		const { post } = this.props.post;

		return (
			<article>
				<div className="container">
					<div className="row">
						<div
							className="col-lg-8 col-md-10 mx-auto"
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
						<div className="col-lg-10 my-4 mx-auto">
							<img src={post.mastheadImage ? post.mastheadImage : ""} alt="" className="w-100" />
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
