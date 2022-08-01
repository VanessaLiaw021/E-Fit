//Import required packages and files
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signin = () => {

  //Styled Component for Form
  const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    margin: 150px auto 0 auto; 
    border: 1px solid black;
  `;

  //Styled Components for Button
  const Button = styled.button`
    background-color: #71a6d2;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 0;
    box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
    width: 80px;
    color: white;
    font-size: 18px;
    margin: 5px 0 20px 0;
    cursor: pointer;
  `;

  return (
    <SignInForm>
      <h2>Sign Up</h2>
      <div className="form-group bottom-form">
        <label>Email:</label>
        <input type="text" placeholder="Email"/>
      </div>
      <div className="form-group bottom-form">
        <label>Password:</label>
        <input type="password" placeholder="Password"/>
      </div>
      <p id="account">Don't have an account? <Link to="/signup" className="direct-signin">Sign Up</Link></p>
      <Button>Sign In</Button>
    </SignInForm>
  );
};

export default Signin;