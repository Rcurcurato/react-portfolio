import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <div>
            <section>
                <header>
                    <h2 className='nav-bar'>Ronald Curcurato's Portfolio</h2>
                    <nav>
                        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    </nav>
                </header>
            </section>
        </div>
    );
}

export default Header;
