import React from 'react';

function Nav(props) {

    const {
        currentPage,
        handlePageChange,
    } = props;

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
    };

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="/about"
                        onClick={() => handlePageChange('about')}
                        className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                        style={linkStyle}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/portfolio"
                        onClick={() => handlePageChange('portfolio')}
                        className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
                        style={linkStyle}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/contact"
                        onClick={() => handlePageChange('contact')}
                        className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                        style={linkStyle}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/resume"
                        onClick={() => handlePageChange('resume')}
                        className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                        style={linkStyle}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
