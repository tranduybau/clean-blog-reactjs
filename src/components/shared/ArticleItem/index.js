import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ArticleItem extends Component {
	constructor(props) {
		super(props);

		this.shortHandDescription = this.shortHandDescription.bind(this);
		this.changeGetTimeToDay = this.changeGetTimeToDay.bind(this);
		this.showArticleFeature = this.showArticleFeature.bind(this);
		this.closeArticleFeature = this.closeArticleFeature.bind(this);

		this.state = {
			isShowArticleFeature: false,
		};
	}

	shortHandDescription(Str) {
		if (Str.length > 100)
			if (Str[99] === " ") return `${Str.substring(3, 94)}...`;
			else return `${Str.substring(3, 95)}...`;
		return Str;
	}

	changeGetTimeToDay(Str) {
		const number = String(new Date(Number(Str)));

		return number.substring(0, 15);
	}

	showArticleFeature() {
		this.setState({
			isShowArticleFeature: true,
		});
	}
	closeArticleFeature() {
		this.setState({
			isShowArticleFeature: false,
		});
	}

	render() {
		const { item } = this.props;

		return (
			<div
				className="post-preview position-relative"
				onMouseOver={this.showArticleFeature}
				onMouseLeave={this.closeArticleFeature}>
				<Link to={`/detail-post/${item.slug}`}>
					<h2 className="post-title">{item.title}</h2>
					<h3
						className="post-subtitle"
						dangerouslySetInnerHTML={{
							__html: this.shortHandDescription(item.description ? item.description : ""),
						}}
					/>
				</Link>
				<p className="post-meta ">
					Posted at <b>{this.changeGetTimeToDay(item.createdAt)}</b>, by {item.author.name}
				</p>
				<div
					className={`position-absolute left-100 top-center transition-normal pl-2 h-100 ${
						this.state.isShowArticleFeature ? "" : "opacity-0"
					}`}>
					<div className="h-100 d-flex align-items-center justify-content-center flex-column article-item__feature__rate-point">
						<div className="d-flex align-items-center">
							<i className="far fa-eye mr-1"></i>
							<small className="text-left">{item.rate.point}</small>
						</div>
						<div className="d-flex w-100 ml-auto">
							<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 mr-1 mt-n1">
								<i className="fas fa-caret-up mb-n1"></i>
								<i className="fas fa-caret-down mt-n2"></i>
							</div>
							<small className="text-left">{item.views}</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ArticleItem.propTypes = {
	article: PropTypes.object,
};

ArticleItem.defaultProps = {
	article: {},
};

export default ArticleItem;
