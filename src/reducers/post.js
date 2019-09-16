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
	OPEN_SEARCH_BOX,
	CLOSE_SEARCH_BOX,
	SEARCH_POSTS_BY_KEYWORD,
	SEARCH_POSTS_BY_KEYWORD_FAILED,
	SEARCH_POSTS_BY_KEYWORD_SUCCESS,
} from "../constants/actionTypes";

var initialState = {
	posts: [],
	post: {},
	isLoading: false,
	error: null,
	isSearchBoxOpened: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS: {
			return Object.assign({}, state, {});
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
			return Object.assign({}, state, {});
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

		case CLEAR_POST_DETAIL: {
			return Object.assign({}, state, {
				post: {},
			});
		}

		case START_LOADING: {
			return Object.assign({}, state, {
				isLoading: true,
			});
		}

		case STOP_LOADING: {
			return Object.assign({}, state, {
				isLoading: false,
			});
		}

		case OPEN_SEARCH_BOX: {
			return Object.assign({}, state, {
				isSearchBoxOpened: true,
			});
		}

		case CLOSE_SEARCH_BOX: {
			return Object.assign({}, state, {
				isSearchBoxOpened: false,
			});
		}

		case SEARCH_POSTS_BY_KEYWORD: {
			return Object.assign({}, state, {});
		}

		case SEARCH_POSTS_BY_KEYWORD_SUCCESS: {
			return Object.assign({}, state, {
				posts: action.payload,
			});
		}

		case SEARCH_POSTS_BY_KEYWORD_FAILED: {
			return Object.assign({}, state, {
				error: action.error,
			});
		}

		default:
			return state;
	}
}
