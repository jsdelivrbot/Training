// need axios and redux promise
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'
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