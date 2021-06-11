import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav">
                <Link to="/">
                    <li>Top</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/user">
                    <li>User</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;