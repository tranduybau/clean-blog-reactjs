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
	pendingLogin,
	loginFailed,
	loginSuccessed,
	openLoginBox,
	closeLoginBox,
	logOut,
} from "../actions/actions";

export const showPosts = page => {
	return dispatch => {
		dispatch(getDataOfAllPosts());
		axios
			.get(`http://localhost:3000/articles?_page=${page}`)
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
			.get(`http://localhost:3000/articles?slug=${id}`)
			.then(res => {
				dispatch(getDetailOfOnePostSuccessed(res.data[0]));
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

export const searchPosts = Obj => {
	return dispatch => {
		const { keyword, page } = Obj;

		dispatch(searchPostsByKeyword());
		axios
			.get(`http://localhost:3000/articles?q=${keyword}&_page=${page}`)
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

export const openLoginComponent = () => {
	return dispatch => {
		dispatch(openLoginBox());
	};
};

export const closeLoginComponent = () => {
	return dispatch => {
		dispatch(closeLoginBox());
	};
};

export const fetchUser = userInfo => {
	return async dispatch => {
		const { email, password, checked } = userInfo;

		dispatch(pendingLogin());
		const isUserExist = await axios.get(
			`http://localhost:3000/users?email=${email}&password=${password}`
		);

		if (isUserExist.data.length === 1) {
			if (checked) localStorage.setItem("userInfo", JSON.stringify({ email, password }));

			dispatch(loginSuccessed(isUserExist.data[0]));
		} else dispatch(loginFailed({ error: "wrong username or password" }));
	};
};

export const logOutAccount = () => {
	return dispatch => {
		localStorage.removeItem("userInfo");
		dispatch(logOut());
	};
};
