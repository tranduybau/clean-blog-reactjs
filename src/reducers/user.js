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
	isLoadingUserInfo: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PENDING_LOGIN:
			return Object.assign({}, state, {
				isLoadingUserInfo: true,
			});

		case LOGIN_SUCCESSED:
			return Object.assign({}, state, {
				isLoadingUserInfo: false,
				loginFailed: false,
				user: action.payload,
			});

		case LOGIN_FAILED:
			return Object.assign({}, state, {
				isLoadingUserInfo: false,
				loginFailed: true,
			});

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
