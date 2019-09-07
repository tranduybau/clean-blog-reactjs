import { GET_POST, GET_POSTS } from "./actionTypes";

// module.exports = {
//   getPostsFromServer: () => ({
//     type: GET_POSTS,
//   }),
//   getDetailOfThePost: id => ({
//     type: GET_POST,
//     id,
//   }),
// };

export const getDataOfAllPosts = () => ({
  type: GET_POSTS,
});
export const getDetailOfOnePost = id => ({
  type: GET_POST,
  id,
});
