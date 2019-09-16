import React, { Component } from "react";
import { connect } from "react-redux";

class Searcher extends Component {
	render() {
		return (
			<div className="d-flex align-items-center justify-content-center position-absolute top-0 left-0 w-100 h-100 pp-bg-cl">
				<div>
					<img
						src="https://66.media.tumblr.com/0e2442e4675af57cdacb88ca1b3593dd/tumblr_inline_porv230cZ71ufobw9_540.gif"
						alt=""
					/>
					<div className="input-group mb-3">
						<input type="text" className="form-control" />
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary py-0 text-white border-white transition-normal"
								type="button">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Searcher;
