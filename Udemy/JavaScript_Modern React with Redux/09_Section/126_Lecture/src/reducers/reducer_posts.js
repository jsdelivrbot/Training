import _ from 'lodash';

import { FETCH_POSTS } from '../actions';
// we want an object, so init obj
export default function(state = {}, action){
  switch (action.type) {
    case FETCH_POSTS:
      // lodash - take array of records, and take a prop out of a obj, make key, make val the obj
      return _.mapKeys(action.payload.data, 'id');
  
    default:
      return state;
  }
}