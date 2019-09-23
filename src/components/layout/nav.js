import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props);

		this.openSearchLayout = this.openSearchLayout.bind(this);
		this.openLoginLayout = this.openLoginLayout.bind(this);
	}

	openSearchLayout(event) {
		event.preventDefault();

		document.body.classList.add("overflow-hidden");
		document.getElementById("searchEngine").classList.add("d-flex");
		document.getElementById("searchBox").focus();
	}

	openLoginLayout(event) {
		event.preventDefault();

		console.log("Lô");
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
						<div className="d-flex align-items-center">
							<div className="nav-item">
								<Link className="nav-link text-white" to="/" onClick={this.openSearchLayout}>
									<i className="fas fa-search" title="Search" />
								</Link>
							</div>
							<div className="nav-item">
								<Link to="/" className="nav-link text-white" onClick={this.openLoginLayout}>
									Login or Register
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
