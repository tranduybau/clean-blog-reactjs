import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props);

		this.openSearchLayout = this.openSearchLayout.bind(this);
	}

	openSearchLayout(event) {
		event.preventDefault();

		document.body.classList.add("overflow-hidden");
		document.getElementById("searchEngine").classList.add("d-flex");
		document.getElementById("searchBox").focus();
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
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						Menu
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto align-items-center">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/" onClick={this.openSearchLayout}>
									<i className="fas fa-search" title="Search" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
