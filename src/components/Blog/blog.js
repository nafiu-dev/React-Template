import React from 'react';

import Waiting from '../Extars/waiting';
import Blogs from './Blogs';

const Service = () => {
    return (
        <div>
            <section className="Home">
                <div className="home-main">
                    <h2>News <span className="red-color"> & </span> Tips</h2>
                    <p><span className="red-color"> Home </span> / Blog</p>
                </div>
            </section>
            
            <Blogs />
            
            <Waiting />
        </div>
    )
}
export default Service;