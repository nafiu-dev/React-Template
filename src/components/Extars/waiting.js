import React from 'react';
import { Link } from 'react-router-dom';

const Waiting = () => {
    return (
        <div>
            <section className="waiting">
                <div className="container">
                    <div className="waiting-main row">
                        <div className="waiting-text col-sm-12 col-md-9">
                            <h3>What are you waiting for ?</h3>
                            <p>Lorem ipsum dolor sit amet, adipisicing elit. Obcaecati, laboriosam.</p>
                        </div>
                        <div className="waiting-btn col-sm-12 col-md-3">
                            <Link to="/contact" className="btn btn-light" >Contact us now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Waiting;