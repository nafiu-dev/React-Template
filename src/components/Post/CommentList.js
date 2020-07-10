import React from 'react';

const CommentList = ({Comment}) => {
    const comments = Comment.length ? (
        Comment.map(comment => {
            return (
                <div className="each-comment card col-sm-12 col-md-8" key={comment.id}>
                    <h5>{comment.name}</h5>
                    <p>
                        {comment.contact}
                    </p>
                </div>  
            )
        })
    ) : (
        <div className="no-comments">
            <h4>No comments</h4>
        </div>
    )

    return (
        <div>
             <div className="all-comments">
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        </div>
    )
}
export default  CommentList;