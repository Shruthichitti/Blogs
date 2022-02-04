import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

//getting posts data from api
export const fetchPosts = () =>  async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data })
};

//getting user data from api
export const fetchUser = (id) =>  dispatch => {
        _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async(id, dispatch) =>{
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type:'FETCH_USER', payload: response.data });
});

//getting comments data from api
export const fetchComments = (id) =>  dispatch => {
        _fetchComments(id, dispatch);
};

const _fetchComments = _.memoize(async(id, dispatch) =>{
        const response = await jsonPlaceHolder.get(`/posts/${id}/comments`);
        dispatch({type:'FETCH_COMMENTS', payload: response.data });
});

//updating posts data
export const updatePost = (id) =>  dispatch => {
        _updatePost(id, dispatch);
};

const _updatePost = _.memoize(async(id, dispatch) =>{
        const response = await jsonPlaceHolder.put(`/posts/${id}`);
        dispatch({type:'UPDATE_POST', payload: response.data });
});

//deleting posts data
export const deletePost = (id) =>  dispatch => {
        _deletePost(id, dispatch);
};

const _deletePost = _.memoize(async(id, dispatch) =>{
        const response = await jsonPlaceHolder.delete(`/posts/${id}`);
        dispatch({type:'DELETE_POST', payload: response.data });
});
