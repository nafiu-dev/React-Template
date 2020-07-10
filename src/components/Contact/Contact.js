import React from 'react'

import Form from './Form';
const Contact = () => {
    return (
        <div>
            <section className="Home">
                <div className="home-main">
                    <h2>Contact us</h2>
                    <p><span className="red-color"> Home </span> / Contact us</p>
                </div>
            </section>

            <section className="contact">
                <div className="container">
                    <div className="row">

                        <div className=" col-sm-12 col-md-8"> 
                            <Form />
                        </div>

                        <div className="form-item col-sm-12 col-md-4">
                            <div className="card bg-light mb-3" >
                                <div className="card-header">Contact Info</div>
                                <div className="card-body">
                                <h5 className="card-title">Address:</h5>
                                <p className="card-text">Fake address / 21, street</p>
                                <h5 className="card-title">Phone:</h5>
                                <p className="card-text"> +(111) 111 111 111</p>
                                <h5 className="card-title">Email:</h5>
                                <p className="card-text"> info@encrypted.com </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
export default  Contact;