import React, { Component } from "react";

class Loader extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<img
							src="https://66.media.tumblr.com/9355f2f91de8f25db53ee76d975103b7/tumblr_inline_pnl2irkwXR1ufobw9_540.gif"
							alt=""
							className="w-100"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Loader;
