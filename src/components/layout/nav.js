import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { openLoginComponent, logOutAccount } from "dispatchers";

class Nav extends Component {
	constructor(props) {
		super(props);

		this.openSearchLayout = this.openSearchLayout.bind(this);
		this.openLoginLayout = this.openLoginLayout.bind(this);
		this.logOut = this.logOut.bind(this);

		this.state = {
			userInfo: {},
		};
	}

	openSearchLayout(event) {
		event.preventDefault();

		document.body.classList.add("overflow-hidden");
		document.getElementById("searchEngine").classList.add("d-flex");
		document.getElementById("searchBox").focus();
	}

	openLoginLayout(event) {
		event.preventDefault();

		this.props.openLoginComponent();
	}

	logOut() {
		// this.props.userInfo;
		this.props.logOutAccount();
	}

	componentDidMount() {
		var lastScrollTop = 0;

		document.addEventListener(
			"scroll",
			function() {
				let st = window.pageYOffset || document.documentElement.scrollTop;

				let navbar = document.getElementById("mainNav");
				let heightOfNavbar = document.getElementById("mainNav").offsetHeight;

				if (st < lastScrollTop) {
					if (st === 0) {
						navbar.classList.remove("is-fixed", "is-visible");
					} else navbar.classList.add("is-visible");
				} else if (st > heightOfNavbar) {
					navbar.classList.add("is-fixed");
					navbar.classList.remove("is-visible");
				}
			},
			false
		);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
				<div className="container">
					<Link className="navbar-brand" to="/">
						HOME
					</Link>
					<div className="d-flex justify-content-end align-items-center">
						<ul className="navbar-nav ml-auto align-items-center flex-row">
							<li className="nav-item mx-2">
								<Link className="nav-link" to="/" onClick={this.openSearchLayout}>
									<i className="fas fa-search" title="Search" />
								</Link>
							</li>
							<li className="nav-item">
								{this.props.userInfo.user.name ? (
									<div className="dropdown">
										<Link
											to="/"
											className="border-0 p-0 box-shadow-none bg-transparent nav-link text-white"
											id="dropdownMenuLink"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Hello {this.props.userInfo.user.name}
										</Link>
										<div
											className="dropdown-menu right-0 left-auto"
											aria-labelledby="dropdownMenuLink">
											<Link to="" className="dropdown-item">
												Create A New Article
											</Link>
											<Link to="" className="dropdown-item">
												Manage Articles
											</Link>
											<Link to="" className="dropdown-item">
												Create A New Category
											</Link>
											<Link to="" className="dropdown-item">
												Manage Categories
											</Link>
											<Link to="" className="dropdown-item">
												Manage Users
											</Link>
											<Link to="" className="dropdown-item" onClick={this.logOut}>
												Logout
											</Link>
										</div>
									</div>
								) : (
									<Link to="/" className="nav-link" onClick={this.openLoginLayout}>
										Login
									</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

Nav.propTypes = {
	userInfo: PropTypes.object,
	logOutAccount: PropTypes.func.isRequired,
	openLoginComponent: PropTypes.func.isRequired,
};

Nav.defaultProps = {
	userInfo: {},
};

const mapStateToProps = state => {
	return {
		userInfo: state.user,
	};
};

const mapDispatchToProps = { openLoginComponent, logOutAccount };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
