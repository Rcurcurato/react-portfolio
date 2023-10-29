import React from 'react';

function About() {
    return (
        <div className="about">
            <div className="hero">
                <h1 className="hero-text">Welcome to my portfolio</h1>
                <p>
                    Here you will find some of my accomplishments from my time in the UConn full-stack web development boot camp.
                </p>
            </div>
            <h1 className='about-me'>About Me</h1>
            <img src="{profileImage}" alt="profile-pic" className="profile-pic" />
            <h2 className="about-me"> About </h2>
            <p className="about-me">
                I am a full-stack developer in training and currently enrolled in UConn's full-stack web developer boot camp.
            </p>
        </div>
    );
}

export default About;
