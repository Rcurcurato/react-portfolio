import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {

    return (
        <footer>
            <h3>Created By Ronald Curcurato</h3>

            <a href="https://github.com/Rcurcurato">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/ronnie-curcurato-8514b8273">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </footer>
    )

}

export default Footer;
