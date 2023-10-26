import React from 'react';

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <a href="https://walletwizzz-e48c873597e2.herokuapp.com/">
                        <img src="react-portfolio\public\WalletWiz logo.png" alt="Wallet Wiz Project" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://brennysouza.github.io/dish-dash/">
                        <img src="assets/images/image.png" alt="Dish Dash Project" />
                    </a>
                </div>
            </div>
            <h1>Mini Projects</h1>
            <div className="row">
                <div className="col">
                    <a href="https://rcurcurato.github.io/work-day-scheduler/">
                        <img src="assets/images/work_schedule_apps.png" alt="Work Day Scheduler" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://rcurcurato.github.io/Random-Password-Generator/">
                        <img src="assets/images/random_password_generator.webp" alt="Random Password Generator" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://sleepy-tor-62304-5e1a7840e11e.herokuapp.com/">
                        <img src="assets/images/note-taking.png" alt="Note Taking" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
