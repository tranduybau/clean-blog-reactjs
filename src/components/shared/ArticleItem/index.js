import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ArticleItem extends Component {
	shortHandDescription(Str) {
		if (Str.length)
			if (Str[99] === " ") return `${Str.substring(3, 94)}...`;
			else return `${Str.substring(3, 95)}...`;
		return Str;
	}

	render() {
		const { item } = this.props;

		return (
			<div className="post-preview">
				<Link to={`/detail-post/${item.show.id}`}>
					<h2 className="post-title">{item.show.name}</h2>
					<h3
						className="post-subtitle"
						dangerouslySetInnerHTML={{
							__html: this.shortHandDescription(item.show.summary ? item.show.summary : ""),
						}}
					/>
				</Link>
				<p className="post-meta ">
					Premiered at <b>{item.show.premiered}</b>, click
					<a
						target="_blank"
						className="text-dark text-decoration-none mx-1"
						rel="noopener noreferrer"
						href={`${item.show.url}`}>
						here
					</a>
					for more infomations.
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
