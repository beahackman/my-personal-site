import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "grommet-icons";
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div
        className="mobileMenu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <Close color="#040484" /> : <Menu color="#040484" />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/my-personal-site"
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutMe"
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          >
            Resume
          </NavLink>
        </li>
        {/* <li><NavLink to="/forFun">For Fun</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
