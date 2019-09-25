import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
		};
	}

	headerStyle = post => {
		return `url('${post ? post.mastheadImage : "/img/home-bg.jpg"}')`;
	};

	render() {
		const { post } = this.props.post || {};

		return (
			<header className="masthead mb-3" style={{ backgroundImage: `${this.headerStyle(post)}` }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>{post ? post.title : "Blog"}</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

Header.proTypes = {
	post: PropTypes.object,
};

Header.defaultProps = {
	post: {},
};

const mapStateToProps = state => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps)(Header);
