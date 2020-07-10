import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Models from '../Extars/models';
import Waiting from '../Extars/waiting';
import BlogView from './Blogview';
import CroppedIMG from './croped.png';
import UserIMG from './tooto.png';
import { connect } from 'react-redux';

class home extends Component {
    render() {
        return (
            <div>
                <section className="Home">
                    <div className="home-main">
                        <h2> <span className="red-color">Improve </span> your car speed.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            nsequatur. Molestias magnam nisi molestiae
                        </p>
                        <Link to="" className="btn btn-dark">LEARN HOW</Link>
                    </div>
                </section>

                <Models />

                <section className="why-choose">
                    <div className="container">
                    <div className="row">
                            <div className="why-text col-sm-6">
                                <h4>Why Choose Us</h4>
                                <p>
                                    Rerum perspiciatis et mollitia facere saepe, placeat dicta amet velit laudantium doloribus
                                    repellendus dolor quas ex in inventore suscipit!
                                    Placeat dicta amet velit laudantium doloribus repellendus dolor quas ex in inventore suscipit!
                                </p>
                                <Link to="" className="btn btn-dark">Contact us now</Link>
                            </div>
                            <div className="why-image col-sm-6">
                                <img src={CroppedIMG} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Testimonials" >
                    <div className="container Testimonials-main ">
                        <div className="Testimonials-text">
                            <p className="red-color"> - Testimonials -</p>
                            <h3>Happy Customers</h3>
                        </div>
                        <div className="row testimonials-cards">


                            <div className="card testimonials-each-card col-sm-11 col-md-3" >
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniatum"</p>
                                    <div className="card-info">
                                        <div className="card-info-img">
                                            <img src={UserIMG}  alt="" />
                                        </div>
                                        <div className="card-info-text">
                                            <p>Jhon Mike</p>
                                            <p className="black-color">painter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card testimonials-each-card col-sm-11 col-md-3">
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniatum"</p>
                                    <div className="card-info">
                                        <div className="card-info-img">
                                            <img src={UserIMG}  alt="" />
                                        </div>
                                        <div className="card-info-text">
                                            <p>Mike Fisher</p>
                                            <p className="black-color">Texi Driver</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card testimonials-each-card col-sm-11 col-md-3" >
                                <div className="card-body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniatum"</p>
                                    <div className="card-info">
                                        <div className="card-info-img">
                                            <img src={UserIMG}  alt="" />
                                        </div>
                                        <div className="card-info-text">
                                            <p>ahmed Jhon</p>
                                            <p className="black-color">Racer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <BlogView />

                <Waiting />
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(MapStateToProps)(home);