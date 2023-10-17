import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Menu} from "grommet-icons";
import "./NavBar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className="mobileMenu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <Menu color="#040484"/>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to='/my-personal-site'>Home</NavLink></li>
                <li><NavLink to="/aboutMe">About Me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/forFun">For Fun</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;