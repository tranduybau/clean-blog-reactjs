import {
	FETCH_POST,
	FETCH_POST_SUCCESSED,
	FETCH_POST_FAILED,
	FETCH_POSTS,
	FETCH_POSTS_SUCCESSED,
	FETCH_POSTS_FAILED,
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
