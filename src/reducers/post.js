import {
	FETCH_POST,
	FETCH_POST_SUCCESSED,
	FETCH_POST_FAILED,
	FETCH_POSTS,
	FETCH_POSTS_SUCCESSED,
	FETCH_POSTS_FAILED,
} from "../constants/actionTypes";

var initialState = {
	posts: [],
	post: {},
	isLoading: false,
	error: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS: {
			return Object.assign({}, state, {
				isLoading: true,
			});
		}

		case FETCH_POSTS_SUCCESSED: {
			return Object.assign({}, state, {
				posts: action.payload,
			});
		}

		case FETCH_POSTS_FAILED: {
			return Object.assign({}, state, {
				error: action.error,
			});
		}

		case FETCH_POST: {
			return Object.assign({}, state, {
				isLoading: true,
			});
		}

		case FETCH_POST_SUCCESSED: {
			return Object.assign({}, state, {
				post: action.payload,
			});
		}

		case FETCH_POST_FAILED: {
			return Object.assign({}, state, {
				error: action.error,
			});
		}

		default:
			return state;
	}
}
