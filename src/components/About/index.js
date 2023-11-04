import React from 'react';
import heroImage from '../../assets/images/378-3784025_header-background-png-heading-background-png.png'

function About() {
    return (
        <div>
            <div className="hero">
                <img
                    src={heroImage}
                    alt="hero"
                    className="hero-image"/>
                <h1 className="hero-text">Welcome to my portfolio</h1>
                <p>
                    Here you will find some of my accomplishments from my time in the UConn full-stack web development boot camp.
                </p>
            </div>
            <div className='about-me'>
            <h1>About Me</h1>
            <img src="/Snapchat-404760189.jpg" alt="profile-pic" className="profile-pic" />
            <p className="about-me">
                I am a full-stack developer in training and currently enrolled in UConn's full-stack web developer boot camp.
            </p>
            </div>
            </div>
    );
}

export default About;
