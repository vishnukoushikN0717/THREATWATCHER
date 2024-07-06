import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className='navhead'> CRISIS RESPONSE</h1>
            <ul className='listel'>

                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/report">Report Incident</Link></li>
                <li><Link to="/coordinate">Coordination</Link></li>
                <li><Link to="/predict">Prediction</Link></li>
                <li><Link to="/remedies">Remedies</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
