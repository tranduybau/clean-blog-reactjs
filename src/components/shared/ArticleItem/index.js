import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ArticleItem extends Component {
	constructor(props) {
		super(props);

		this.shortHandDescription = this.shortHandDescription.bind(this);
		this.changeGetTimeToDay = this.changeGetTimeToDay.bind(this);
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

	render() {
		const { item } = this.props;

		return (
			<div className="post-preview">
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
