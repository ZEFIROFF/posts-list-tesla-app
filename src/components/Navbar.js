import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-background border-top-0">
            <div className="container-lg justify-content-center">
                <nav className="nav justify-content-center text-white">
                    <li className="nav-item fs-5">
                        <a className="nav-link active " aria-current="page" href="./">Home</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link " href="./About">About</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link " href="./Not-found">404</a>
                    </li>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
