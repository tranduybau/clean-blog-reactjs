import {
	FETCH_POST,
	FETCH_POST_SUCCESSED,
	FETCH_POST_FAILED,
	CLEAR_POST_DETAIL,
	FETCH_POSTS,
	FETCH_POSTS_SUCCESSED,
	FETCH_POSTS_FAILED,
	START_LOADING,
	STOP_LOADING,
} from "../constants/actionTypes";

export const getDataOfAllPosts = () => {
	return {
		type: FETCH_POSTS,
	};
};

export const getDataOfAllPostsSuccessed = data => {
	return {
		type: FETCH_POSTS_SUCCESSED,
		payload: data,
	};
};

export const getDataOfAllPostsFailed = error => {
	return {
		type: FETCH_POSTS_FAILED,
		error,
	};
};

// one post
export const getDetailOfOnePost = id => {
	return {
		type: FETCH_POST,
		id,
	};
};

export const getDetailOfOnePostSuccessed = data => {
	return {
		type: FETCH_POST_SUCCESSED,
		payload: data,
	};
};

export const getDetailOfOnePostFailed = error => {
	return {
		type: FETCH_POST_FAILED,
		error,
	};
};

// delete post detail
export const clearThePostDetail = () => {
	return {
		type: CLEAR_POST_DETAIL,
	};
};

// loading
export const startLoading = () => {
	return {
		type: START_LOADING,
	};
};

export const stopLoading = () => {
	return {
		type: STOP_LOADING,
	};
};
