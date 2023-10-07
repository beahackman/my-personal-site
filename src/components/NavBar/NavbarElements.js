import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0 5vw 0 5vw;
  z-index: 12;
  background: #E3E3F1;
`;
 
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #040484;
    font-weight: bold;
  };
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const MainCluster = styled.div`
  display: flex;
  flex-direction: row;
`;
 
export const NavMenu = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: end;
    margin-top: 30px;
  }
`;