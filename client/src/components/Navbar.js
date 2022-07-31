//Import required packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Navbar Component 
const Navbar = () => {

  //Styled Component for the Header
  const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
    background-color: #ffe4e1;
  `;  

  //Styled Component for the NavBar
  const Navbar = styled.ul`
    display: flex;
    list-style-type: none; 
  `;

  //Styled Component for the NavBar List
  const NavList = styled.li`
    margin: 0 20px;
    font-size: 20px;
    line-height: 30px;
  `;

  return (
    <Header>
        <h1>E-Fit</h1>

        {/* NavBar */}
        <nav>
          <Navbar>
            <NavList>
              <Link to='/' className="links nav-link">Home</Link>
            </NavList>
            <NavList>
              <Link to='/exercises' className="links nav-link">Exercises</Link>
            </NavList>
            <NavList>
              <Link to='/products' className="links nav-link">Products</Link>
            </NavList>
            <NavList>
              <Link to='/signin' className="links nav-link">Sign In</Link>
            </NavList>
            <NavList id="user-account">
              <Link to='/signup' className="links">Sign Up</Link>
            </NavList>
          </Navbar>
        </nav>
    </Header>
  );
};

//Export navbar component
export default Navbar;