import axios from "axios";

import {
	getDataOfAllPosts,
	getDataOfAllPostsSuccessed,
	getDataOfAllPostsFailed,
	clearThePostDetail,
	getDetailOfOnePost,
	getDetailOfOnePostSuccessed,
	getDetailOfOnePostFailed,
	startLoading,
	stopLoading,
	openSearchBox,
	closeSearchBox,
	searchPostsByKeyword,
	searchPostsByKeywordSuccess,
	searchPostsByKeywordFailed,
	getAllCategories,
	getAllCategoriesFailed,
	getAllCategoriesSuccessed,
} from "../actions/actions";

export const showPosts = () => {
	return dispatch => {
		dispatch(getDataOfAllPosts());
		axios
			.get("http://localhost:3000/articles")
			.then(res => {
				dispatch(getDataOfAllPostsSuccessed(res.data));
			})
			.catch(errors => {
				dispatch(getDataOfAllPostsFailed(errors));
			});
	};
};

export const showOnePost = id => {
	return dispatch => {
		dispatch(getDetailOfOnePost());
		axios
			.get(`http://localhost:3000/articles/${id}`)
			.then(res => {
				dispatch(getDetailOfOnePostSuccessed(res.data));
			})
			.catch(errors => {
				dispatch(getDetailOfOnePostFailed(errors));
			});
	};
};

export const clearInfoPost = () => {
	return dispatch => {
		dispatch(clearThePostDetail());
	};
};

export const showLoader = () => {
	return dispatch => {
		dispatch(startLoading());
		setTimeout(() => {
			dispatch(stopLoading());
		}, 1500);
	};
};

export const openSearchComponent = () => {
	return dispatch => {
		dispatch(openSearchBox());
	};
};

export const closeSearchComponent = () => {
	return dispatch => {
		dispatch(closeSearchBox());
	};
};

export const searchPosts = keyword => {
	return dispatch => {
		dispatch(searchPostsByKeyword());
		axios
			.get(`https://api.tvmaze.com/search/shows?q=${keyword}`)
			.then(res => dispatch(searchPostsByKeywordSuccess(res.data)))
			.catch(error => dispatch(searchPostsByKeywordFailed(error)));
	};
};

//  get categhories
export const fetchAllCategories = () => {
	return dispatch => {
		dispatch(getAllCategories());
		axios
			.get("http://localhost:3000/categories")
			.then(res => dispatch(getAllCategoriesSuccessed(res.data)))
			.catch(error => dispatch(getAllCategoriesFailed(error)));
	};
};
