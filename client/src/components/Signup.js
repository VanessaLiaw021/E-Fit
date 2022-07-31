//Import required packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Signup Component
const Signup = () => {

  //Styled Component for Form
  const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    margin: 120px auto 0 auto; 
    border: 1px solid black;
  `;

  const Button = styled.button`
    background-color: #71a6d2;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 0;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    width: 80px;
    color: white;
    font-size: 18px;
    margin: 5px 0 20px 0;
    cursor: pointer;
  `;

  return (
    <SignUpForm>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" placeholder="First Name" />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" placeholder="Last Name" />  
      </div>
      <div className="form-group bottom-form">
        <label>Email:</label>
        <input type="text" placeholder="Email"/>
      </div>
      <div className="form-group bottom-form">
        <label>Password:</label>
        <input type="password" placeholder="Password"/>
      </div>
      <p id="account">Have an account? <Link to="/signin" className="direct-signin">Sign In</Link></p>
      <Button>Sign Up</Button>
    </SignUpForm>
  );
};

//Export Signup Component
export default Signup;