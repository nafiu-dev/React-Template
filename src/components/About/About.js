import React from 'react';

import Waiting from '../Extars/waiting';

import CroppedIMG from './croped.png';


const About = () => {
    return (
        <div>
            <section className="Home">
                <div className="home-main">
                    <h2>About us</h2>
                    <p><span className="red-color"> Home </span> / About us</p>
                </div>
            </section>

            <section className="why-choose">
                <div className="container">
                    <div className="row">
                        <div className="why-text col-sm-6">
                            <h4>About us</h4>
                            <p>
                                Rerum perspiciatis et mollitia facere saepe, placeat dicta amet velit laudantium doloribus
                                repellendus dolor quas ex in inventore suscipit!
                                Placeat dicta amet velit laudantium doloribus repellendus dolor quas ex in inventore suscipit!
                            </p>
                        </div>
                        <div className="why-image col-sm-6">
                            <img src={CroppedIMG} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Waiting />
        </div>
    )
}
export default About;