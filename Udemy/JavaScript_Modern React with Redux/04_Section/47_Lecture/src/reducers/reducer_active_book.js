// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action){
  // state += 1;
  // reducer will get called whenever state changes
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  // handle the case when a action hits that doesn't concern this action, we'll return base case
  return state;
}