import { combineReducers } from "redux";

import post from "./post";
import categories from "./categories";

const rootReducer = combineReducers({
	post,
	categories,
});

export default rootReducer;
