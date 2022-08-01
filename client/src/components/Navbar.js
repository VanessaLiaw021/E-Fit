//Import required packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Navbar Component 
const Navbar = () => {

  //Styled Component for the Header
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    background-color: #ffe4e1;
  `;  

  //Styled Component for the NavBar
  const Navbar = styled.ul`
    display: flex;
    list-style-type: none; 
  `;

  //Styled Component for the NavBar List
  const NavList = styled.li`
    margin: 0 18px;
    font-size: 20px;
    line-height: 30px;
  `;

  return (
    <Header>
        <Link to="/"><h1>E-Fit</h1></Link>

        {/* NavBar */}
        <nav>
          <Navbar>
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