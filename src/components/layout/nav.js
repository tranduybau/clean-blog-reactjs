import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props);

		this.openSearchLayout = this.openSearchLayout.bind(this);
	}

	openSearchLayout() {
		document.body.classList.add("overflow-hidden");
		document.getElementById("searchEngine").classList.add("d-flex");
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
								<div className="cursor-pointer text-white" onClick={this.openSearchLayout}>
									<i className="fas fa-search" title="Search" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
