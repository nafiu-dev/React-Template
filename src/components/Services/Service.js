import React from 'react';


import Models from '../Extars/models';
import Waiting from '../Extars/waiting';

const Service = () => {
    return (
        <div>
            <section className="Home">
                <div className="home-main">
                    <h2>Services</h2>
                    <p><span className="red-color"> Home </span> / Services</p>
                </div>
            </section>
            
            <Models />
            
            <section className="service">
                <div className="container">
                    <div className="row">
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-paint-roller fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">PAINTING</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-cogs fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">ENGINE</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-people-carry fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">SPARE PARTS</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-flag-checkered fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">MONTHLY RACE</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-car fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">CAR WASHING</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card service-card col-sm-11 col-md-5">
                            <div className="row no-gutters">
                                <div className="col-sm-4 icon-service">
                                    <i className="fas fa-gas-pump fa-4x"></i>
                                </div>
                                <div className="col-sm-8 text-service">
                                    <div className="card-body">
                                        <h5 className="card-title">FREE GAS</h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed id nisi eius velit !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Waiting />
        </div>
    )
}
export default Service;