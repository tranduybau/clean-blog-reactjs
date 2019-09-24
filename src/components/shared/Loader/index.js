import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Loader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}
	componentDidMount() {
		if (this.props.post.isLoading) document.body.classList.add("overflow-hidden");
		else document.body.classList.remove("overflow-hidden");
	}

	componentDidUpdate() {
		if (this.props.post.isLoading) document.body.classList.add("overflow-hidden");
		else document.body.classList.remove("overflow-hidden");
	}

	render() {
		const { isLoading } = this.props.post;

		return (
			<div
				className={`position-fixed top-0 left-0 w-100 h-100 loader--background align-items-center justify-content-center d-flex z-index--100 transition-normal ${
					isLoading ? "z-index-1900" : "opacity-0"
				}`}>
				<div className="container">
					<div className="row">
						<div className="col-md-8 mx-auto">
							<img
								src="https://66.media.tumblr.com/9355f2f91de8f25db53ee76d975103b7/tumblr_inline_pnl2irkwXR1ufobw9_540.gif"
								alt=""
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Loader.propTypes = {
	post: PropTypes.object,
};

Loader.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Loader);
