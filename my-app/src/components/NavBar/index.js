import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import {Menu, HomeRounded} from "grommet-icons";
import "./NavBar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to='/my-personal-site' className="landing-link"><HomeRounded color="#040484"/></Link>
            <div className="mobileMenu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <Menu color="#040484"/>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/aboutMe">About Me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/forFun">For Fun</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;