import React from 'react';

//Getting single post title and body to a popup and able to edit in a textarea and can submit to the api
const EditPost = props => {

    //submitting data to the api
    const handleSubmit = (event) => {
        event.preventDefault();
        const finalData = {
            id : props.updatePostId,
            title : props.editTitle,
            body : props.editBody,
            userId : props.updateUserId
        }
        props.updatePost(finalData)
    }

    //handling change of the title
    const handleTitleChange = (e) =>{
        props.setEditTitle(e.target.value)
    }

    //handline change of the body
    const handleBodyChange = (e) =>{
        props.setEditBody(e.target.value)
    }
    return(
        <div className='popup'>
            <div className='popup_inner'>
                <form onSubmit={() => handleSubmit()} className='form-alignment'>
                    <div className='display-flex'>
                        <span>Title :</span>
                        <textarea type="text" name="title" rows="4" value = {props.editTitle} onChange = {(e) => handleTitleChange(e)} className='form-inputs '/>
                    </div>
                    <div className='display-flex'>
                        <span>Body :</span>
                        <textarea type="text" name="body" rows="4" value = {props.editBody} onChange = {(e) => handleBodyChange(e)} className='form-inputs'/>
                    </div>
                    <input type="submit" value="Submit" className='edit-button'/>
                    <button onClick={() => props.setEditIsOpen(!props.editIsOpen)}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost;