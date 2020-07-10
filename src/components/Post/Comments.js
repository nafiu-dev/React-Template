import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentFrom from './CommentFrom';

class Comments extends Component {

    state = {
        comment: [
       
        ]
    }

    Addcomment = commet => {
        commet.id = Math.random();
        let comment = [...this.state.comment, commet]; 
        this.setState({
            comment
        });
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                
                <section className="comments">
                    <div className="container">
                        <CommentList Comment={this.state.comment}/>
                    </div>
                </section>
                
                <section className="comment-add">
                   <CommentFrom Addcomment={this.Addcomment} />
                </section>

            </div>
        )
    }
}
export default Comments;