import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLink } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';

function Portfolio() {
    return (
        <div className="project-container">
            <div className='full-stack-projects'>
                <h1>Full Stack Projects</h1>
                <div className="row">
                    <div className="col col-margin">
                        <div className="project-card">
                            <h2>Wallet Wiz</h2>
                            <img src="/WalletWiz logo.png" alt="Wallet Wiz Project" />
                            <p>Wallet Wiz is a financial tracker built using
                                <p>
                                    server side APIs, Node.js, Express.js, MySQL, and Sequelize.</p>
                            </p>
                            <a href="https://walletwizzz-e48c873597e2.herokuapp.com" className="project-link">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                            <a href="https://github.com/cslunsford/wallet-wiz.git" className="github-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="col col-margin">
                        <div className="project-card custom-class">
                            <h2>Dish Dash</h2>
                            <img src="/image.png" alt="Dish Dash Project" />
                            <p>Dish Dash is an online database used to search
                                for your favorite recipes.
                                <p>It is built using
                                    server side APIs, HTML, CSS, and JavaScript.
                                </p>
                            </p>
                            <a href="https://brennysouza.github.io/dish-dash/" className="project-link">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                            <a href="https://github.com/brennysouza/dish-dash.git" className="project-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mini-projects">
                    <h1>Mini Projects</h1>
                    <div className="row">
                        <div className="col col-margin">
                            <div className='project-card'>
                                <h2>Work Day Scheduler</h2>
                                <img src="/work_schedule_apps.png" alt="Work Day Scheduler" />
                                <p>A simple calender app that allows users to save events for
                                    each our of the day. This app runs in the browser and features
                                    dynamically updated HTML and CSS powered by jQuery.
                                </p>
                                <a href="https://rcurcurato.github.io/work-day-scheduler/">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </a>
                                <a href="https://github.com/Rcurcurato/work-day-scheduler.git">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>

                        </div>
                        <div className="col col-margin">
                            <div className='project-card'>
                                <h2>Random Password Generator</h2>
                                <img src="/random password generator.webp" alt="Random Password Generator" />
                                <p>A random password generator that allows users to create a random
                                    password based on criteria they've selected. This app runs in the
                                    browser and features dynamically updated HTML and CSS powered by
                                    JavaScript.
                                </p>
                                <a href="https://rcurcurato.github.io/Random-Password-Generator/">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </a>
                                <a href="https://github.com/Rcurcurato/Random-Password-Generator.git">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="col col-margin">
                            <div className='project-card'>
                                <h2>Note Taker</h2>
                                <img src="/note-taking.png" alt="Note Taking" />
                                <p>A note taker that allows the user to write and save notes.
                                    This application uses an express backend and saves and retrieves
                                    note data from a JSON file.
                                </p>
                                <a href="https://sleepy-tor-62304-5e1a7840e11e.herokuapp.com/">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </a>
                                <a href="https://github.com/Rcurcurato/daily-activity-note-taker.git">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="col col-margin">
                            <div className='project-card'>
                                <h2>E-Commerce Back End</h2>
                                <img src="/e-commerce.jpg" alt="e-commerce" />
                                <p>An e-commerce database that allows users to retrieve data
                                    from a database using MySQL and Sequelize.
                                </p>
                                <a href="https://github.com/Rcurcurato/E-Commerce-Website.git">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Portfolio;
