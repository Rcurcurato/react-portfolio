import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

function Resume() {
    return (
        <section className="resume">
        <h1>My Resume</h1>
        <div className="resume-content">
        <h2>Download My Resume Here</h2>
        <a href="https://docs.google.com/document/d/e/2PACX-1vQfmrNEoNqTS9CPHj6Di20LugZ1Egbk3OpThpxRBDoemYthbanA55SIU8mvzKgI6X_mnOB_zRKFqFRD/pub?embedded=true">
            <FontAwesomeIcon icon={faCloudArrowUp} />
            </a>
            <div> 
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            </div>
            </div>
        </section>

    )
}

export default Resume;