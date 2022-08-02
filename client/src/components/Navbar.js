//Import required packages
import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import styled from 'styled-components';


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
        <NavList>Order History</NavList>
        <NavList><a href="/" onClick={() => Auth.logout()}>Logout</a></NavList>
        </>
      )
    } else {

      return (
        <>
          <NavList>
            <Link to='/signin' className="links nav-link">Sign In</Link>
          </NavList>
          <NavList id="user-account">
            <Link to='/signup' className="links">Sign Up</Link>
          </NavList>
        </>
      )
    }
  }

  return (
    <Header>
      <Link to="/"><h1>E-Fit</h1></Link>
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
          {showNavBar()}
        </NavbarWrapper>
      </nav>
    </Header>
  );
};

//Export navbar component
export default Navbar;