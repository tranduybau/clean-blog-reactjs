import { GET_POST, GET_POSTS } from "./actionTypes";

export const getDataOfAllPosts = () => ({
	type: GET_POSTS,
});

export const getDetailOfOnePost = id => ({
	type: GET_POST,
	id,
});
