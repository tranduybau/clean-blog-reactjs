import {
	GET_ALL_CATEGORIES,
	GET_ALL_CATEGORIES_FAILED,
	GET_ALL_CATEGORIES_SUCCESSED,
} from "../constants/actionTypes";

var initialState = {
	categories: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_CATEGORIES:
			return Object.assign({}, state, {});

		case GET_ALL_CATEGORIES_SUCCESSED:
			return Object.assign({}, state, {
				categories: action.payload,
			});

		case GET_ALL_CATEGORIES_FAILED:
			return Object.assign({}, state, {
				error: action.error,
			});

		default:
			return Object.assign({}, state, {});
	}
}
