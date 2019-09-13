import React, { Component } from "react";
import PropTypes from "prop-types";

class Tag extends Component {
	render() {
		const { content } = this.props;

		return <div className="btn btn-outline-dark m-1 px-2 py-1 font-weight-light">{content}</div>;
	}
}

Tag.propTypes = {
	content: PropTypes.string,
};

Tag.defaultProps = {
	content: "",
};

export default Tag;
