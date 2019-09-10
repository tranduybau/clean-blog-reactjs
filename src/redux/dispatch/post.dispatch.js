import axios from "axios";

export const fetchPosts = () => {
	return axios.get("https://api.tvmaze.com/search/shows?q=batman");
};

export const fetchPost = id => {
	return;
};
