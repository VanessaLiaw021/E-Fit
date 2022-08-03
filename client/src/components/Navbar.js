//Import required packages
import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

//Styled Component for the Header
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  background-color: #ffe4e1;
`;  

//Styled Component for the NavBar
const NavbarWrapper = styled.ul`
  display: flex;
  list-style-type: none; 
`;

//Styled Component for the NavBar List
const NavList = styled.li`
  margin: 0 18px;
  font-size: 20px;
  line-height: 30px;
`;

//Navbar Component
const Navbar = ()  => {

  //Function to deteremine if user is logged in. It deteremine which navlink to display 
  const showNavBar = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-icon">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/orders" className="dropdown-list">Order History</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/favorites" className="dropdown-list">Favorites</Link></Dropdown.Item>
              <Dropdown.Item className="logout-wrapper"><a href="/" onClick={() => Auth.logout()} className="logout">Logout</a></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )
    } else {

      return (
        <>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-icon">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/signin" className="dropdown-list">Sign In</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/signup" className="dropdown-list">Sign Up</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )
    }
  }

  return (
    <Header>
      <Link to="/" className="view-button"><h1 className="logo">E-Fit</h1></Link>
      <nav>
        <NavbarWrapper>
          <NavList>
            <Link to='/' className="links nav-link middle-nav">Home</Link>
          </NavList>
          <NavList>
            <Link to='/exercises' className="links nav-link middle-nav">Exercises</Link>
          </NavList>
          <NavList>
            <Link to='/products' className="links nav-link middle-nav">Products</Link>
          </NavList>
          <NavList>
            <Link to='/carts' className="links nav-link middle-nav"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
          </NavList>
          {showNavBar()}
        </NavbarWrapper>
      </nav>
    </Header>
  );
};

//Export navbar component
export default Navbar;