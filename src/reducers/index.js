import { combineReducers } from 'redux';
import postReducer from './postReducers';
import fetchUserReducer  from './fetchUserReducer';
import fetchCommentsReducer from './fetchCommentsReducer';
import deletePostReducer from './deletePostReducer';
import updatePostReducer from './updatePostReducer';

//combined all reducers

export default combineReducers({
    posts: postReducer,
    users: fetchUserReducer,
    comments: fetchCommentsReducer,
    deletepost: deletePostReducer,
    updatepost: updatePostReducer
});