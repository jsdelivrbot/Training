import _ from 'lodash';

import { FETCH_POSTS, FETCH_A_POST } from '../actions';
// we want an object, so init obj
export default function(state = {}, action){
  switch (action.type) {
    case FETCH_A_POST:
      const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      // console.log(action.payload.data);
      // lodash - take array of records, and take a prop out of a obj, make key, make val the obj
      return _.mapKeys(action.payload.data, 'id');
  
    default:
      return state;
  }
}