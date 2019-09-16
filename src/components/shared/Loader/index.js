import React, { Component } from "react";
import { connect } from "react-redux";
import ProTypes from "prop-types";

class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {},
		};
	}

	render() {
		const { isLoading } = this.props.post;

		if (isLoading)
			return (
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
			);
		return <div className="d-none" />;
	}
}

Loader.proTypes = {
	post: ProTypes.object,
};

Loader.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps)(Loader);
