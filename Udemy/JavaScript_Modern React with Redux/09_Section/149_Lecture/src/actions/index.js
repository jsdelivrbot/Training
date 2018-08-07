// need axios and redux promise
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_A_POST = 'fetch_a_post'

export const DELETE_A_POST = 'delete_a_post'
export const CREATE_POST = 'create_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ralphie1234'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log(request);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, cbRedirect){
  // console.log(here);
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => cbRedirect());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  
  return {
    type: FETCH_A_POST,
    payload: request
  }
}

export function deletePost(id, cbReturnToIndex){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => cbReturnToIndex())
  
  return {
    type: DELETE_A_POST,
    payload: id
  }
}