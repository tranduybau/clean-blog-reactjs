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
	CLOSE_SEARCH_BOX,
	OPEN_SEARCH_BOX,
	SEARCH_POSTS_BY_KEYWORD,
	SEARCH_POSTS_BY_KEYWORD_SUCCESS,
	SEARCH_POSTS_BY_KEYWORD_FAILED,
	GET_ALL_CATEGORIES,
	GET_ALL_CATEGORIES_FAILED,
	GET_ALL_CATEGORIES_SUCCESSED,
	OPEN_LOGIN_BOX,
	CLOSE_LOGIN_BOX,
	LOGIN_FAILED,
	LOGIN_SUCCESSED,
	PENDING_LOGIN,
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

// Search machine
export const openSearchBox = () => {
	return {
		type: OPEN_SEARCH_BOX,
	};
};
export const closeSearchBox = () => {
	return {
		type: CLOSE_SEARCH_BOX,
	};
};
export const searchPostsByKeyword = () => {
	return {
		type: SEARCH_POSTS_BY_KEYWORD,
	};
};

export const searchPostsByKeywordSuccess = data => {
	return {
		type: SEARCH_POSTS_BY_KEYWORD_SUCCESS,
		payload: data,
	};
};

export const searchPostsByKeywordFailed = error => {
	return {
		type: SEARCH_POSTS_BY_KEYWORD_FAILED,
		error,
	};
};

// get categories
export const getAllCategories = () => {
	return {
		type: GET_ALL_CATEGORIES,
	};
};

export const getAllCategoriesSuccessed = data => {
	return {
		type: GET_ALL_CATEGORIES_SUCCESSED,
		payload: data,
	};
};

export const getAllCategoriesFailed = error => {
	return {
		type: GET_ALL_CATEGORIES_FAILED,
		error,
	};
};

// LOGIN
export const openLoginBox = () => {
	return {
		type: OPEN_LOGIN_BOX,
	};
};

export const closeLoginBox = () => {
	return {
		type: CLOSE_LOGIN_BOX,
	};
};

export const pendingLogin = userInfo => {
	return {
		type: PENDING_LOGIN,
		payload: userInfo,
	};
};

export const loginSuccessed = userInfo => {
	return {
		type: LOGIN_SUCCESSED,
		payload: userInfo,
	};
};

export const loginFailed = () => {
	return {
		type: LOGIN_FAILED,
	};
};
