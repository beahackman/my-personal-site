import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/aboutMe" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/forFun" activeStyle>
                        For Fun
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;