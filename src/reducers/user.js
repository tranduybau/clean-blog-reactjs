import {
	PENDING_LOGIN,
	CLOSE_LOGIN_BOX,
	OPEN_LOGIN_BOX,
	LOGIN_SUCCESSED,
	LOGIN_FAILED,
} from "../constants/actionTypes";

var initialState = {
	user: {},
	loginFailed: false,
	isLoginBoxOpened: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PENDING_LOGIN:
			return Object.assign({}, state, {});

		case LOGIN_SUCCESSED:
			return Object.assign({}, state, {
				user: action.payload,
			});

		case LOGIN_FAILED:
			return Object.assign({}, state, {});

		case OPEN_LOGIN_BOX: {
			return Object.assign({}, state, {
				isLoginBoxOpened: true,
			});
		}

		case CLOSE_LOGIN_BOX:
			return Object.assign({}, state, {
				isLoginBoxOpened: false,
			});

		default:
			return Object.assign({}, state, {});
	}
}
