import { combineReducers } from "redux";

import post from "./post";
import categories from "./categories";
import user from "./user";

const rootReducer = combineReducers({
	post,
	categories,
	user,
});

export default rootReducer;
