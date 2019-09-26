import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Reply from "./reply";

class Comment extends Component {
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
		const { comments } = this.props;

		return (
			<div className="col-lg-10 my-4 mx-auto">
				<h4>Comments</h4>
				<hr className="" />
				{comments && comments.amount
					? comments.commentedBy.map((comment, index) => (
							<div key={index}>
								<div className="d-flex my-2">
									<img alt="" src={comment.avatar} width="50" height="50" className="img-cover" />
									<div className="ml-2 flex-grow-1">
										<div>
											<small className="font-weight-bold">{comment.name}</small>{" "}
											<small>
												<small>
													on {""}
													<span>{this.formatDay(comment.createdAt)}</span> at{" "}
													<span>{this.formatTime(comment.createdAt)}</span>
												</small>
											</small>
										</div>
										<div id={`reply-${comment.id}`}>
											<div>
												<small>{comment.content}</small>
											</div>
											{comment.reply.length
												? comment.reply.map((reply, index) => (
														<div key={index}>
															<Reply reply={reply} />
														</div>
												  ))
												: ""}
										</div>
									</div>
								</div>
								{index + 1 < comments.amount ? <hr /> : ""}
							</div>
					  ))
					: ""}
			</div>
		);
	}
}

export default Comment;
