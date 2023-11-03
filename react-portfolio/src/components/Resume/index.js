import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Resume() {
    return (
        <section className="resume">
        <h1> My Resume</h1>
        <a href="file:///C:/Users/rcurc/Downloads/Resume-Ronald-Curcurato.pdf">
            <FontAwesomeIcon icon={faFile} />
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
        </section>

    )
}

export default Resume;