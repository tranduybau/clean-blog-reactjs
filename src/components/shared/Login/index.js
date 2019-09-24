import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUser } from "dispatchers";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isLogin: true,
			userInfo: {},
		};

		this.setToLogin = this.setToLogin.bind(this);
		this.setToRegister = this.setToRegister.bind(this);
		this.checkAuthen = this.checkAuthen.bind(this);

		this.email = React.createRef();
		this.password = React.createRef();
		this.name = React.createRef();
		this.avatar = React.createRef();
	}

	setToLogin() {
		this.setState({
			isLogin: true,
		});
	}

	setToRegister() {
		this.setState({
			isLogin: false,
		});
	}

	checkAuthen(event) {
		event.preventDefault();

		if (this.state.isLogin) {
			this.props.fetchUser({
				email: this.email.current.value,
				password: this.password.current.value,
			});
		}
	}

	render() {
		return (
			<div className="position-fixed w-100 h-100 top-0 left-0 z-index-1900">
				<div className="d-flex w-100 align-items-center justify-content-center h-100 position-relative">
					<div
						className="position-absolute w-100 h-100 bg-secondary"
						title="Click here to go back"
					/>
					<div
						className="rounded overflow-hidden bg-white position-relative z-index-1901 transition-normal"
						id="loginSite">
						<form>
							<div className="d-flex p-2">
								<div
									onClick={this.setToLogin}
									className={`cursor-pointer py-3 text-center w-50 transition-normal ${
										this.state.isLogin ? "bg-dark text-white rounded" : ""
									}`}>
									Login
								</div>
								<div
									onClick={this.setToRegister}
									className={`cursor-pointer py-3 text-center w-50 transition-normal ${
										this.state.isLogin ? "" : "bg-dark text-white rounded"
									}`}>
									Register
								</div>
							</div>
							<div className="p-3">
								<div>
									<input
										type="text"
										id="emailBox"
										className="form-control rounded outline-0 box-shadow-none border-dark w-100"
										placeholder="Email"
										ref={this.email}
									/>
									<input
										type="password"
										id="passwordBox"
										className="form-control rounded outline-0 box-shadow-none border-dark w-100 mt-3"
										ref={this.password}
										placeholder="Password"
									/>
									{this.state.isLogin ? (
										<div>
											<label htmlFor="rememberLogin">
												<input type="checkbox" id="rememberLogin" className="p-1" />
												<small className="mx-1 mt-2">Remember me</small>
											</label>
										</div>
									) : (
										<div>
											<hr className="w-100" />
											<input
												type="text"
												id="registerNameBox"
												className="form-control rounded outline-0 box-shadow-none border-dark w-100 mt-3"
												ref={this.name}
												placeholder="Your Name"
											/>
											<input
												type="file"
												id="registerAvatarBox"
												className="form-control rounded outline-0 box-shadow-none border-dark w-100 mt-3"
												ref={this.avatar}
												placeholder="Your Name"
											/>
										</div>
									)}
									<button
										className="btn w-100 py-2 mt-3 btn-outline-dark box-shadow-none"
										onClick={this.checkAuthen}>
										{this.state.isLogin ? "Login" : "Register"}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	fetchUser: PropTypes.func.isRequired,
	userInfo: PropTypes.object,
};

Login.defaultProps = {
	userInfo: {},
};

const mapStateToProps = state => {
	return {
		userInfo: state.user,
	};
};

const mapDispatchToProps = {
	fetchUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
