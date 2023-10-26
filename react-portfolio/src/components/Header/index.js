import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const handleNavClick = (page) => {
        handlePageChange(page);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/about" className="navbar-brand">
                        About
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/portfolio" className={`nav-link ${currentPage === "Portfolio" ? "active" : ""}`}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={`nav-link ${currentPage === "Contact" ? "active" : ""}`}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className={`nav-link ${currentPage === "Resume" ? "active" : ""}`}>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h1>My React Portfolio</h1>
        </header>
    );
}

export default Header;
