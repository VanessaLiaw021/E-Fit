//Import required packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import styled from 'styled-components';

//Styled component for button
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

//Signup Component
const Signup = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value});
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Signup</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          placeholder="First Name"
          name="firstName"
          type="firstName"
          id="firstName"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          placeholder="Last"
          name="lastName"
          type="lastName"
          id="lastName"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Email"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
      </div>
      <p id="account">Have an account? <Link to="/signin" className="direct-signin">Sign In</Link></p>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

//Export Signup Component
export default Signup;