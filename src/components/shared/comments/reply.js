import React, { Component } from "react";

class Reply extends Component {
	constructor(props) {
		super(props);

		this.formatTime = this.formatTime.bind(this);
		this.formatDay = this.formatDay.bind(this);
	}

	formatTime(Str) {
		const time = new Date(Number(Str)).toTimeString();

		return String(time)
			.substring(0, 8)
			.trim();
	}

	formatDay(Str) {
		const time = new Date(Number(Str)).toDateString();

		return String(time)
			.substring(4, 15)
			.trim();
	}

	render() {
		const { reply } = this.props;

		return (
			<div className="d-flex my-2 w-100">
				<img alt="" src={reply.avatar} width="50" height="50" className="img-cover" />
				<div className="ml-2">
					<div>
						<small className="font-weight-bold">{reply.name}</small>{" "}
						<small>
							<small>
								on {""}
								<span>{this.formatDay(reply.createdAt)}</span> at
								<span>{this.formatTime(reply.createdAt)}</span>
							</small>
						</small>
					</div>
					<div id="">
						<div>
							<small>asd</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Reply;
