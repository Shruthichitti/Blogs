import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePost, updatePost} from '../actions';
import PostListView from './PostListView';

//Preparing data for pagination and sending to PostListView for displaying single post

const PostList = props => {
    const pageLimit = 5;
    const dataLimit = 10;
    const pages = Math.round(props.posts.length / dataLimit);
    const [currentPage, setCurrentPage] = useState(1);
    
    //calling get posts api when posts are empty
    useEffect(() =>{
        if(props.posts.length <= 0){
            props.fetchPosts()
        }
    })

    //paginating to next page onclick of next
    const nextPage =() =>{
        setCurrentPage((page) => page + 1);
    }

    //paginating to previous page onclick of previous
    const previousPage = () => {
    setCurrentPage((page) => page - 1);
    }

    //updating current page when moved to different page
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    //preparing data for pagination
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return props.posts.slice(startIndex, endIndex);
    };

    //preapring pagination numbers depending on data length
    const getPaginationNumber = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return(
        <div className="ui relaxed divided list">
            <h1>Bulletin Dashboard</h1>
            {getPaginatedData().map(post => {
                return (
                    <PostListView 
                        postId = {post.id} 
                        title = {post.title}
                        userId = {post.userId}
                        body = {post.body}
                        deletePost = {props.deletePost}
                        updatePost = {props.updatePost}
                    />
                );
            })}
            <div className="pagination">
                <button
                    onClick={previousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>
                {getPaginationNumber().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                <button
                    onClick={nextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return { posts: state.posts, deletepost: state.deletepost}
}

export default connect(mapStateToProps, { fetchPosts, deletePost, updatePost })(PostList);