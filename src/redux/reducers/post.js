import { GET_POST, GET_POSTS } from "../actions/actionTypes";
import axios from "axios";

export default function(
  state = { posts: null, post: null, isLoading: false },
  action,
) {
  switch (action.type) {
    case GET_POSTS: {
      axios.get("https://api.tvmaze.com/search/shows?q=batman").then(res => {
        console.log(res);

        state.posts = res;
      });
      return state;
    }
    case GET_POST: {
      return state;
    }
    default:
      return state;
  }
}
