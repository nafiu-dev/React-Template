import React from 'react'

const footer = () => {
    return (
        <div className="FooTERR">
            <section className="footer">
                <div className="container">
                    <div className="row footer-main" >
                        <div className="footer-each col-sm-12 col-md-4">
                            <i className="fas fa-phone fa-3x"></i>
                            <p>+ (111) 111 111 111</p>
                        </div>
                        <div className="footer-each col-sm-12 col-md-4">
                            <i className="fas fa-map-marker-alt fa-3x"></i>
                            <p>Fake address / 21, street</p>
                        </div>
                        <div className="footer-each col-sm-12 col-md-4">
                            <i className="far fa-envelope fa-3x "></i>
                            <p>info@encrypted.com</p>
                        </div>
                    </div>
                    <p className="copyright">copyright &copy; 2020 All the rights are reserved by <span className="red-color"> encrypted_guy </span> </p>
                </div>
            </section>
        </div>
    )
}
export default footer;