import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogImg from './car2.jpg'

class Blogview extends Component {
    render() {
        const { posts } = this.props;
        const PostList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="card Blogs-each-card " key={post.id}>
                        <img src={BlogImg} className="card-img-top" alt="" />
                        <div className="card-body">
                            <Link className="hover-cencal" to={`/post/${post.id}`}>
                                <h5 className=" red-color card-title">{post.title}</h5>
                            </Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : null

        return (
            <div>
                <section className="Blogs">
                    <div className="container Blogs-main ">
                        <div className="Blogs-text">
                            <Link className="hover-cencal" to="">
                                <p className="red-color"> - Blogs -</p>
                            </Link>
                            <h3>News & Tips</h3>
                        </div>
                        <div className="row Blogs-cards">

                            {PostList}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const MapStateToProps = state => {
    return {
        posts: state.posts.slice(0,3)
    }
}
export default connect(MapStateToProps)(Blogview);