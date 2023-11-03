import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../index.css';

function Portfolio() {
    return (
        <div className="project-container">
            <h1>Full Stack Projects</h1>
            <div className="row">
                <div className="col col-margin">
                    <div className="project-card">
                        <img src="/WalletWiz logo.png" alt="Wallet Wiz Project" />
                        <a href="https://walletwizzz-e48c873597e2.herokuapp.com" className="project-link">
                            <i className="fas fa-link"></i>
                        </a>
                        <a href="https://github.com/cslunsford/wallet-wiz.git" className="github-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="col col-margin">
                    <div className="project-card custom-class">
                        <img src="/image.png" alt="Dish Dash Project" />
                        <a href="https://brennysouza.github.io/dish-dash/" className="project-link">
                            <i className="fas fa-link"></i>
                        </a>
                        <a href="https://github.com/brennysouza/dish-dash.git" className="project-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <h1>Mini Projects</h1>
                <div className="row">
                    <div className="col col-margin">
                        <div className='project-card'>
                            <img src="/work_schedule_apps.png" alt="Work Day Scheduler" />
                            <a href="https://rcurcurato.github.io/work-day-scheduler/">
                                <i className="fas fa-link"></i>
                            </a>
                            <a href="https://github.com/Rcurcurato/work-day-scheduler.git">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>

                    </div>
                    <div className="col col-margin">
                        <div className='project-card'>
                            <img src="/random password generator.webp" alt="Random Password Generator" />
                            <a href="https://rcurcurato.github.io/Random-Password-Generator/">
                                <i className="fas fa-link"></i>
                            </a>
                            <a href="https://github.com/Rcurcurato/Random-Password-Generator.git">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="col col-margin">
                        <div className='project-card'>
                            <img src="/note-taking.png" alt="Note Taking" />
                            <a href="https://sleepy-tor-62304-5e1a7840e11e.herokuapp.com/">
                                <i className="fas fa-link"></i>
                            </a>
                            <a href="https://github.com/Rcurcurato/daily-activity-note-taker.git">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Portfolio;
