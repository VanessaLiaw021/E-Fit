//Import required packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

//Home Component
const Home = () => {

  //Styled component for buttons 
  const Button = styled.button`
    background-color: #71a6d2;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 140px;
    margin: 0 20px;
    height: 40px;
    font-size: 15px;
    color: white;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
  `;

  return (
    <>
    <div className="main home">
      <h2>Want to start <span>Exercising</span> but don't know where to start?</h2>
      <p>Click below to view exercising ideas or view our products</p>

      <div className="buttons">
        <Link to="/exercises"><Button>View Exercises</Button></Link>
        <Link to="/products"><Button>View Products</Button></Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

//Export Home Component
export default Home;