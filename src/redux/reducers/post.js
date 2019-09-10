import { GET_POST, GET_POSTS } from "../actions/actionTypes";

var initialState = {
	posts: null,
	post: null,
	isLoading: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS: {
			return Object.assign({}, state);
		}
		case GET_POST: {
			return Object.assign({}, state);
		}
		default:
			return Object.assign({}, state);
	}
}
