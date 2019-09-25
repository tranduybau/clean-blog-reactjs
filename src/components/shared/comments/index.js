import React, { Component } from "react";

class Comment extends Component {
	render() {
		return (
			<article>
				<div className="container position-relative">
					<div className="row">
						<div
							className="col-lg-8 col-md-10 mx-auto text-justify"
							dangerouslySetInnerHTML={{ __html: "" }}
						/>
						<div className="col-lg-10 my-4 mx-auto">
							<img src={``} alt="" className="w-100" />
						</div>
						<div className="position-absolute right-0 top-0 mt-5">
							<div>
								<div className="d-flex align-items-center justify-content-center flex-column article-item__feature__rate-point">
									<div className="d-flex align-items-center">
										<i className="far fa-comment mr-1"></i>
										<small className="text-left">{``}</small>
									</div>
									<div className="d-flex w-100 ml-auto">
										<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 mr-1 mt-n1">
											<i className="fas fa-caret-up mb-n1"></i>
											<i className="fas fa-caret-down mt-n2"></i>
										</div>
										<small className="text-left">{``}</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					) : (
					<div className="alert alert-danger text-uppercase">
						this link doesn't redirect to any page
					</div>
					)}
				</div>
			</article>
		);
	}
}
