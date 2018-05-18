import { combineReducers } from 'redux';
import postreducer from './post_reducer';
 import actconreducer from './actconreducer';
import posts from './postsred'

const rootReducer = combineReducers({
  contacts:postreducer,
   activecontacts:actconreducer,
   posts:posts
});

export default rootReducer;
