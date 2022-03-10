/** @format */

import axios from 'axios';

// const url = 'http://localhost:5000/Api/posts'; //local
const url = 'https://memories-collection24.herokuapp.com/Api/posts'; //server

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePosts = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
