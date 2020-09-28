import { combineReducers } from 'redux';
import postReducer from './postReducers';
import fetchUserReducer  from './fetchUserReducer';


export default combineReducers({
    posts: postReducer,
    users: fetchUserReducer
});