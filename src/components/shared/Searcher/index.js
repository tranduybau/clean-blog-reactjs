import React, { Component } from "react";
import { connect } from "react-redux";
import ProTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { searchPosts } from "../../../dispatchers/index";

class Searcher extends Component {
	constructor(props) {
		super(props);

		this.closeSearchBox = this.closeSearchBox.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.searchPostsByKeyWord = this.searchPostsByKeyWord.bind(this);
		this.state = {
			value: "",
		};
	}

	closeSearchBox() {
		document.body.classList.remove("overflow-hidden");
		document.getElementById("searchEngine").classList.remove("d-flex");
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	searchPostsByKeyWord = event => {
		event.preventDefault();
		this.props.searchPosts(this.state.value);
		this.closeSearchBox();
		this.props.history.push("/");
		this.setState({ value: "" });
	};

	render() {
		return (
			<div
				className="align-items-center justify-content-center position-absolute top-0 left-0 w-100 h-100 pp-bg-cl z-index-1900 container-fluid d-none transition-normal"
				id="searchEngine">
				<div
					className="z-index-1901 position-absolute w-100 h-100"
					title="click here to close search"
					onClick={this.closeSearchBox}
				/>
				<div className="position-relative z-index-1902">
					<div className="position-absolute top-0 right-0">
						<i
							className="fas fa-times text-white cursor-pointer"
							onClick={this.closeSearchBox}
							title="click here to close search"
						/>
					</div>
					<h2 className="text-uppercase text-white">search engine</h2>
					<img
						src="https://66.media.tumblr.com/0e2442e4675af57cdacb88ca1b3593dd/tumblr_inline_porv230cZ71ufobw9_540.gif"
						alt=""
						className="w-100"
					/>
					<form className="input-group mb-3" onSubmit={this.searchPostsByKeyWord}>
						<input
							type="text"
							id="searchBox"
							className="form-control rounded-0 outline-0 box-shadow-none border-secondary"
							value={this.state.value}
							onChange={this.handleChange}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary py-0 text-white border-white transition-normal outline-0 box-shadow-none"
								type="submit">
								Button
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Searcher.proTypes = {
	searchPosts: ProTypes.func.isRequired,
	value: ProTypes.string,
};

Searcher.defaultProps = {
	value: "",
};

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	searchPosts,
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Searcher)
);
