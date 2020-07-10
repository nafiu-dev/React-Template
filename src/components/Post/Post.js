import React, { Component } from 'react'
import RemovethisIMG from './car1.jpg'
import { connect } from 'react-redux';
import Comments from './Comments';

class Post extends Component {
    render() {
        // console.log(this.props.match.params.post_id)

        const Post = this.props.post ? (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 post-img">
                        <img src={RemovethisIMG} className="img-fluid border" alt="" />
                    </div>
                </div>
                <div className="post-text col-sm-12">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                </div>
            </div>
        ) : null;

        return (
            <div>
                <section className="post">
                    {Post}
                </section>

                <Comments />
            </div>
        )
    }
}
const MapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    id = parseInt(id);
    return {
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(MapStateToProps)(Post);