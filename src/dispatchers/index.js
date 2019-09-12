import axios from "axios";

import {
	getDataOfAllPosts,
	getDataOfAllPostsSuccessed,
	getDataOfAllPostsFailed,
	getDetailOfOnePost,
	getDetailOfOnePostSuccessed,
	getDetailOfOnePostFailed,
} from "../actions/actions";

export const fetchAllPostsFromApi = () => {
	return axios.get("https://api.tvmaze.com/search/shows?q=batman");
};

export const fetchOnePostFromApi = id => {
	return axios.get(`http://api.tvmaze.com/shows/${id}`);
};

export const showArticles = () => {
	return dispatch => {
		dispatch(getDataOfAllPosts());
		fetchAllPostsFromApi()
			.then(res => dispatch(getDataOfAllPostsSuccessed(res.data)))
			.catch(errors => dispatch(getDataOfAllPostsFailed(errors)));
	};
};

export const showOneArticle = id => {
	return dispatch => {
		dispatch(getDetailOfOnePost());
		fetchOnePostFromApi(id)
			.then(res => dispatch(getDetailOfOnePostSuccessed(res.data)))
			.catch(errors => dispatch(getDetailOfOnePostFailed(errors)));
	};
};
